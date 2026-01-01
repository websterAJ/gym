import puppeteer from 'puppeteer';

(async () => {
  const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:8081'; // Adjusted port
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    console.log('Enabling request interception...');
    await page.setRequestInterception(true);

    page.on('request', (request) => {
      if (request.url().includes('/api/auth/login')) {
        console.log('Intercepted login request. Responding with mock success.');
        request.respond({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            token: 'mock_token_12345',
            user: { email: 'test@example.com' },
          }),
        });
      } else {
        request.continue();
      }
    });

    console.log(`Opening login page at ${FRONTEND_URL}/login...`);
    await page.goto(`${FRONTEND_URL}/login`, { waitUntil: 'networkidle2' });

    console.log('Filling form...');
    await page.type('input[type="email"]', 'test@example.com');
    await page.type('input[type="password"]', 'password');

    console.log('Submitting form...');
    // No navigation happens on mock, so we just click
    await page.click('button[type="submit"]');

    // Wait for the app to process the response and set localStorage
    await page.waitForFunction(() => localStorage.getItem('token'));

    console.log('Checking localStorage for token...');
    const token = await page.evaluate(() => localStorage.getItem('token'));
    if (token) {
      console.log('E2E: Login succeeded, token found in localStorage:', token);
      process.exitCode = 0;
    } else {
      console.error('E2E: Login did not store token in localStorage.');
      process.exitCode = 2;
    }
  } catch (err) {
    console.error('E2E error:', err);
    process.exitCode = 1;
  } finally {
    console.log('Closing browser...');
    await browser.close();
  }
})();

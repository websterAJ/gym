const puppeteer = require('puppeteer');

(async () => {
  const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:8080';
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    console.log('Opening login page...');
    await page.goto(`${FRONTEND}/login`, { waitUntil: 'networkidle2' });

    // Fill form
    await page.type('input[type="email"]', 'test@example.com');
    await page.type('input[type="password"]', 'password');

    // Submit form
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 5000 }).catch(() => {}),
    ]);

    // Check localStorage for token
    const token = await page.evaluate(() => localStorage.getItem('token'));
    if (token) {
      console.log('E2E: Login succeeded, token found in localStorage:', token.slice(0, 20) + '...');
      process.exitCode = 0;
    } else {
      console.error('E2E: Login did not store token in localStorage.');
      process.exitCode = 2;
    }
  } catch (err) {
    console.error('E2E error:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();

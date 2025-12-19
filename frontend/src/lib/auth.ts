export function getToken(): string | null {
  try {
    return localStorage.getItem('token');
  } catch (e) {
    return null;
  }
}

export function isAuthenticated(): boolean {
  const t = getToken();
  return !!t;
}

export function clearToken() {
  try { localStorage.removeItem('token'); } catch(e) {}
}

export function saveUserToken(token) {
  localStorage.setItem('token', token);
}

export function removeUserToken() {
  localStorage.removeItem('token');
}

export function getUserToken() {
  return (localStorage.getItem('token') || null);
}

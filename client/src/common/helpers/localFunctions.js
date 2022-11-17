export function saveUserInfo(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeUserInfo() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export function getUserToken() {
  return (localStorage.getItem('token') || '');
}

export function getUser() {
  const userjson = localStorage.getItem('user');
  return userjson ? JSON.parse(userjson) : null;
}

export function getUserId() {
  const userjson = localStorage.getItem('user');
  if (!userjson) {
    return '';
  }

  const user = JSON.parse(userjson);
  return user.id;
}

export function getUsername() {
  const userjson = localStorage.getItem('user');
  if (!userjson) {
    return '';
  }

  const user = JSON.parse(userjson);
  return user.username;
}

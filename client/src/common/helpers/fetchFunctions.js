// to refactor later :)
import { getUserToken } from './localFunctions';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const requestPost = (path, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const route = apiUrl + path;
  const token = getUserToken();
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  return fetch(route, options)
    .then((response) => response.json())
    .then((response) => {
      if (!response.ok) { throw new Error(response.message); }
      return response;
    });
};

const userLogin = (password, email) => requestPost('/auth/login', { password, email });

export default userLogin;

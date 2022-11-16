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
    .then((response) => {
      if (!response.ok) { throw new Error('Network response was not OK'); }
      return response.json();
    })
    .catch((error) => error.message);
};

const userLogin = (email, password) => requestPost('/login', { password, email });

export default userLogin;

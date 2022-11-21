import { post } from './crud';

export const userLogin = (password, email) => post('/api/auth/login', { password, email });

export const register = (username, email, password) => post('/auth/register', { username, email, password });

export const silentUserLogin = (token) => post('/auth/silent-login', { token });

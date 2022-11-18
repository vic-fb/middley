import { post } from './crud';

export const userLogin = (password, email) => post('/auth/login', { password, email });

export const register = (username, email, password) => post('/auth/register', { username, email, password });

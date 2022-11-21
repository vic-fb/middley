import { get } from './crud';

export const getUserById = (id) => get(`/users/${id}`);
export const getUsers = () => get('/users');

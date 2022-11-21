import { get } from './crud';

export const getUserById = (id) => get(`/users/${id}`);

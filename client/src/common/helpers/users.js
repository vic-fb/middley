import { get, put } from './crud';

export const getUserById = (id) => get(`/users/${id}`);

export const updateUserAddress = (id, home, work) => put(`/users/${id}`, { home, work });

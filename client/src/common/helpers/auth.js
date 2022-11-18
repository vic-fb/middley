import { post } from './crud';

const userLogin = (password, email) => post('/auth/login', { password, email });

export default userLogin;

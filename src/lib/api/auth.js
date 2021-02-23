import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post(
    '/api/auth/login',
    { username, password },
    { withCredentials: true },
  );

// 회원가입
export const register = ({ username, password }) =>
  client.post(
    '/api/auth/register',
    { username, password },
    { withCredentials: true },
  );

// 로그인 상태 확인
export const check = () =>
  client.get('/api/auth/check', { withCredentials: true });

// 로그아웃
export const logout = () =>
  client.post('/api/auth/logout', { withCredentials: true });

import { getCookie, setCookie } from 'shared/lib';
import { AUTH_COOKIE } from './constants';

export const setToken = (token: string) => {
  setCookie(AUTH_COOKIE, token);
};

export const getToken = () => getCookie(AUTH_COOKIE);

export const isLoggedIn = () => {
  const token = getToken();

  // Откуда приходит токен с нулем - непонятно. Оставляю чтобы не поломать разлогин, если такое значение действительно возможно
  return !!(token && token !== '0');
};

export const deleteToken = () => {
  setToken('');
};


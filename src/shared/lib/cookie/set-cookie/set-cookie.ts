import { COOKIE_DOMAIN, MAX_AGE } from './constants';
import type { CookieOptions } from './types';

/**
 * Создает cookie с заданным значением и настройками
 */
export const setCookie = (
  name: string,
  value: any,
  {
    maxAge = MAX_AGE,
    path = '/',
    domain = `.${COOKIE_DOMAIN}`,
  }: CookieOptions = {},
) => {
  let expires = '0';

  if (maxAge !== null) {
    const expirationDate = new Date(Date.now() + maxAge);
    expires = expirationDate.toUTCString();
  }

  document.cookie = `${name}=${value}; expires=${expires}; domain=${domain}; path=${path}`;
};

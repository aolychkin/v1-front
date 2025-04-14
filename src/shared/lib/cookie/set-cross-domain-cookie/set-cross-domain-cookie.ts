import { setCookie } from '../set-cookie';

export const setCrossDomainCookie = (name: string, value: any, params = {}) => {
  const chunks = window.location.hostname.split('.');
  const rootDomain = chunks.slice(chunks.length - 2).join('.');
  const domain = `.${rootDomain}`;
  setCookie(name, value, { domain, ...params });
};

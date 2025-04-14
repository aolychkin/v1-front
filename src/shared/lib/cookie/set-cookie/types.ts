import type { Maybe } from 'shared/lib';

export type CookieOptions = {
  domain?: string;
  maxAge?: Maybe<number>;
  path?: string;
};
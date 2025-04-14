export const MAX_AGE = 365 * 24 * 60 * 60 * 1000;

export const COOKIE_DOMAIN = window.location.hostname.replace(
  /(beta|local)[.]/,
  '',
);
//TODO: хз зачем замену делать - выяснить
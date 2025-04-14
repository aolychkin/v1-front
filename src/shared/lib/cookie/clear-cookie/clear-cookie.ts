/**
 * очищает cookie по имени
 */
export const clearCookie = (name: string) => {
  document.cookie = `${name}=; expires=${new Date(0).toUTCString()}`;
};

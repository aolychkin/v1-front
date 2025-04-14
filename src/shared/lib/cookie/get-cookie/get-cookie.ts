/**
 * Возвращает cookie по имени
 */
export const getCookie = (name: string) => {
  const cookies = document.cookie.split(/;\s?/);

  for (const cookieItem of cookies) {
    if (cookieItem.startsWith(`${name}=`)) {
      return cookieItem.substr(name.length + 1);
    }
  }

  return null;
};

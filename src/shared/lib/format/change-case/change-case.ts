import { StringTypes, type Replacer } from './types';

export const getReplacer = (type: StringTypes): Replacer => {
  return type === StringTypes.CAMEL_CASE
    ? (key) => key.replace(/_(.)/g, (_, char) => char.toUpperCase())
    : (key) => key.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`);
};

export const changeCase = (input: unknown, replace: Replacer): typeof input => {
  if (input instanceof Object) {
    if (Array.isArray(input)) {
      return input.map((x) => changeCase(x, replace));
    }

    return Object.entries(input).reduce(
      (acc, [key, val]) => ({
        ...acc,
        [replace(key)]: changeCase(val, replace),
      }),
      {},
    );
  }

  return input;
};

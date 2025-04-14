import type { PlainObject } from 'shared/lib';

/**
 * Трансформирует объект для вывода ошибок на форму
 * - массив преобразует к строке
 * - строку сохраняет без изменений
 * - остальные типы приводит к пустой строке
 *
 * @example
 * const x = transformErrors({
 *  a: ['hello', 123],
 *  b: 111,
 *  c: 'Anderson',
 * });
 * // { a: 'hello, 123', b: '', c: 'Anderson' }
 * @param errors
 * @returns
 */
export const transformErrors = (errors: PlainObject) =>
  Object.entries(errors).reduce((acc: PlainObject, [key, value]) => {
    if (Array.isArray(value)) {
      acc[key] = value.join(', ');
    } else if (typeof value === 'string') {
      acc[key] = value;
    } else {
      acc[key] = '';
    }

    return acc;
  }, {});


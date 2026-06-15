/**
 * Возвращает первый элемент массива.
 *
 * @typeParam T — тип элементов массива
 */
export function first<T>(items: T[]): T | undefined {
  return items[0];
}

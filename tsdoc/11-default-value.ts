/**
 * Параметры пагинации.
 */
export interface PaginationOptions {
  /**
   * Смещение от начала.
   * @defaultValue 0
   */
  offset?: number;
  /**
   * Размер страницы.
   * @defaultValue 10
   */
  limit?: number;
}

/**
 * Возвращает срез массива с учётом пагинации.
 */
export function paginate<T>(items: T[], options: PaginationOptions = {}): T[] {
  const offset = options.offset ?? 0;
  const limit = options.limit ?? 10;
  return items.slice(offset, offset + limit);
}

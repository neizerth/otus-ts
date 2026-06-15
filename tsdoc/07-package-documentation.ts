/**
 * @packageDocumentation
 *
 * Утилиты для работы со строками.
 */

/**
 * Обрезает пробелы и приводит к нижнему регистру.
 */
export function normalize(value: string): string {
  return value.trim().toLowerCase();
}

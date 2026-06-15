/**
 * Старый способ получить полное имя.
 *
 * @deprecated Используйте {@link formatFullName} вместо этой функции.
 */
export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

/**
 * Форматирует полное имя.
 */
export function formatFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

/**
 * Публичный API модуля.
 */
export function publicApi(): string {
  return internalHelper();
}

/**
 * Внутренняя реализация — исключается при `excludeInternal: true`.
 *
 * @internal
 */
function internalHelper(): string {
  return 'internal';
}

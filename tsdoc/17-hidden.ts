/**
 * Публичная функция — попадёт в документацию.
 */
export function visible(): number {
  return 42;
}

/**
 * Скрытая вспомогательная функция.
 *
 * @hidden
 */
export function hiddenHelper(): string {
  return 'not in docs';
}

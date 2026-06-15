/**
 * Делит a на b.
 *
 * @param a — делимое
 * @param b — делитель
 * @returns результат деления
 * @throws если b равно нулю
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

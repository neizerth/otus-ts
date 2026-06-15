/**
 * Возводит число в степень.
 *
 * @param base — основание
 * @param exponent — показатель степени
 * @returns результат возведения в степень
 *
 * @example
 * ```ts
 * pow(2, 3); // 8
 * ```
 *
 * @example
 * ```ts
 * pow(10, 0); // 1
 * ```
 */
export function pow(base: number, exponent: number): number {
  return base ** exponent;
}

/**
 * Вычисляет площадь круга.
 *
 * @see {@link https://en.wikipedia.org/wiki/Area_of_a_circle | Формула площади круга}
 */
export function circleArea(radius: number): number {
  return Math.PI * radius ** 2;
}

/**
 * Вычисляет длину окружности.
 *
 * @see {@link circleArea} — связанная функция для площади
 */
export function circlePerimeter(radius: number): number {
  return 2 * Math.PI * radius;
}

/**
 * Вычисляет площадь круга.
 * @param {number} radius
 * @returns {number}
 * @see {@link https://en.wikipedia.org/wiki/Area_of_a_circle|Формула площади круга}
 */
function circleArea(radius) {
  return Math.PI * radius ** 2;
}

/**
 * Вычисляет длину окружности.
 * @param {number} radius
 * @returns {number}
 * @see circleArea — связанная функция для площади
 */
function circlePerimeter(radius) {
  return 2 * Math.PI * radius;
}

module.exports = { circleArea, circlePerimeter };

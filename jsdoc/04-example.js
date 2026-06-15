/**
 * Возводит число в степень.
 * @param {number} base — основание
 * @param {number} exponent — показатель степени
 * @returns {number}
 * @example
 * pow(2, 3); // 8
 * @example
 * pow(10, 0); // 1
 */
function pow(base, exponent) {
  return base ** exponent;
}

module.exports = { pow };

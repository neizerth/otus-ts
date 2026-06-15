/**
 * Делит a на b.
 * @param {number} a — делимое
 * @param {number} b — делитель
 * @returns {number} результат деления
 * @throws {Error} если b равно нулю
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { divide };

/**
 * Утилиты для работы со строками.
 * @module string-utils
 */

/**
 * Обрезает пробелы и приводит к нижнему регистру.
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.trim().toLowerCase();
}

module.exports = { normalize };

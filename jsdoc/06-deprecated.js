/**
 * Старый способ получить полное имя.
 * @deprecated Используйте {@link formatFullName} вместо этой функции.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

/**
 * Форматирует полное имя.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function formatFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

module.exports = { getFullName, formatFullName };

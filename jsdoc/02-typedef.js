/**
 * @typedef {Object} User
 * @property {string} name — имя пользователя
 * @property {number} age — возраст в годах
 */

/**
 * Форматирует пользователя для вывода.
 * @param {User} user
 * @returns {string}
 */
function formatUser(user) {
  return `${user.name}, ${user.age}`;
}

module.exports = { formatUser };

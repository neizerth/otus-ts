/**
 * Загружает пользователя по id.
 * @async
 * @param {string} id
 * @returns {Promise<{id: string, name: string}>}
 */
async function fetchUser(id) {
  return { id, name: 'Alice' };
}

module.exports = { fetchUser };

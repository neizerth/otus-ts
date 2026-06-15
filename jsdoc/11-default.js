/**
 * Конфигурация пагинации.
 * @typedef {Object} PaginationOptions
 * @property {number} [offset=0] — смещение от начала
 * @property {number} [limit=10] — размер страницы
 */

/**
 * Возвращает срез массива с учётом пагинации.
 * @param {Array<*>} items
 * @param {PaginationOptions} [options]
 * @returns {Array<*>}
 */
function paginate(items, options = {}) {
  const offset = options.offset ?? 0;
  const limit = options.limit ?? 10;
  return items.slice(offset, offset + limit);
}

module.exports = { paginate };

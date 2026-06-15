/**
 * Публичный API модуля.
 * @returns {string}
 */
function publicApi() {
  return internalHelper();
}

/**
 * Внутренняя реализация — помечена @internal.
 * @internal
 * @returns {string}
 */
function internalHelper() {
  return 'internal';
}

module.exports = { publicApi };

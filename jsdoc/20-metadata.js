/**
 * Устаревший идентификатор сессии.
 * @author Vladimir
 * @version 1.0.0
 * @since 1.0.0
 * @todo Заменить на UUID v4
 * @returns {string}
 */
function getSessionId() {
  return 'session-123';
}

module.exports = { getSessionId };

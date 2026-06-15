/**
 * Сервис с разными уровнями видимости методов.
 * @class
 */
class SecretService {
  /** @private */
  _token = 'secret';

  /**
   * Публичный метод — виден в документации.
   * @public
   * @returns {string}
   */
  getPublicInfo() {
    return 'public data';
  }

  /**
   * Внутренний метод — скрыт из публичной документации.
   * @private
   * @returns {string}
   */
  _getToken() {
    return this._token;
  }
}

module.exports = { SecretService };

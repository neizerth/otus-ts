/**
 * @interface Storage
 */
class Storage {
  /**
   * @param {string} key
   * @returns {string|undefined}
   */
  get(key) {
    throw new Error('Not implemented');
  }
}

/**
 * Хранилище в памяти.
 * @class
 * @implements {Storage}
 */
class MemoryStorage {
  constructor() {
    /** @type {Record<string, string>} */
    this.data = {};
  }

  /**
   * @param {string} key
   * @returns {string|undefined}
   */
  get(key) {
    return this.data[key];
  }
}

module.exports = { Storage, MemoryStorage };

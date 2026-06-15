/**
 * Настройки приложения (только для чтения).
 * @typedef {Object} AppConfig
 * @readonly
 * @property {string} apiUrl — базовый URL API
 * @property {number} timeout — таймаут запроса в мс
 */

/** @type {AppConfig} */
const config = Object.freeze({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
});

module.exports = { config };

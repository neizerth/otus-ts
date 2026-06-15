/**
 * Публичная функция — попадёт в документацию.
 * @returns {number}
 */
function visible() {
  return 42;
}

/** @ignore */
function hiddenHelper() {
  return 'not in docs';
}

module.exports = { visible, hiddenHelper };

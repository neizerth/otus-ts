/**
 * Колбэк обработки элемента массива.
 * @callback ProcessCallback
 * @param {*} item — текущий элемент
 * @param {number} index — индекс элемента
 * @returns {void}
 */

/**
 * Применяет колбэк к каждому элементу.
 * @param {Array<*>} items
 * @param {ProcessCallback} callback
 */
function forEachItem(items, callback) {
  items.forEach(callback);
}

module.exports = { forEachItem };

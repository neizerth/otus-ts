/**
 * Статусы заказа.
 * @enum {string}
 */
const OrderStatus = {
  PENDING: 'pending',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
};

/**
 * Проверяет, завершён ли заказ.
 * @param {OrderStatus} status
 * @returns {boolean}
 */
function isCompleted(status) {
  return status === OrderStatus.DELIVERED;
}

module.exports = { OrderStatus, isCompleted };

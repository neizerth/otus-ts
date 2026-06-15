/**
 * Статусы заказа.
 */
export enum OrderStatus {
  /** Ожидает обработки */
  Pending = 'pending',
  /** Отправлен */
  Shipped = 'shipped',
  /** Доставлен */
  Delivered = 'delivered',
}

/**
 * Проверяет, завершён ли заказ.
 */
export function isCompleted(status: OrderStatus): boolean {
  return status === OrderStatus.Delivered;
}

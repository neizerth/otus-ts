/**
 * Колбэк обработки элемента массива.
 */
export type ProcessCallback<T> = (item: T, index: number) => void;

/**
 * Применяет колбэк к каждому элементу.
 */
export function forEachItem<T>(items: T[], callback: ProcessCallback<T>): void {
  items.forEach(callback);
}

/**
 * Контракт хранилища ключ-значение.
 */
export interface Storage {
  /**
   * @param key — ключ
   */
  get(key: string): string | undefined;
}

/**
 * Хранилище в памяти.
 */
export class MemoryStorage implements Storage {
  private data: Record<string, string> = {};

  get(key: string): string | undefined {
    return this.data[key];
  }
}

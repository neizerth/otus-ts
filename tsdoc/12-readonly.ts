/**
 * Настройки приложения (только для чтения).
 */
export interface AppConfig {
  /** @readonly */
  apiUrl: string;
  /** @readonly */
  timeout: number;
}

/** Конфигурация по умолчанию. */
export const config: Readonly<AppConfig> = Object.freeze({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
});

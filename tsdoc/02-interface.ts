/**
 * Пользователь системы.
 */
export interface User {
  /** Имя пользователя */
  name: string;
  /** Возраст в годах */
  age: number;
}

/**
 * Форматирует пользователя для вывода.
 */
export function formatUser(user: User): string {
  return `${user.name}, ${user.age}`;
}

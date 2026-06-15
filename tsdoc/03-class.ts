/**
 * Представляет банковский счёт.
 */
export class Account {
  /**
   * @param owner — владелец счёта
   * @param balance — начальный баланс
   */
  constructor(
    public owner: string,
    public balance = 0,
  ) {}

  /**
   * Пополняет счёт.
   *
   * @param amount — сумма пополнения
   * @returns новый баланс
   */
  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }
}

/**
 * Представляет банковский счёт.
 * @class
 */
class Account {
  /**
   * @param {string} owner — владелец счёта
   * @param {number} [balance=0] — начальный баланс
   */
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  /**
   * Пополняет счёт.
   * @param {number} amount — сумма пополнения
   * @returns {number} новый баланс
   */
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}

module.exports = { Account };

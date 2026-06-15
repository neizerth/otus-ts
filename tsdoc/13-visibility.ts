/**
 * Сервис с разными уровнями видимости методов.
 */
export class SecretService {
  private _token = 'secret';

  /**
   * Публичный метод — виден в документации.
   * @public
   */
  getPublicInfo(): string {
    return 'public data';
  }

  /**
   * Внутренний метод — скрыт при `excludeInternal: true`.
   * @internal
   */
  getToken(): string {
    return this._token;
  }
}

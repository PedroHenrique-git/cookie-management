import { CookieProtocol } from '../../domain/cookie-config-protocol/cookie-protocol';

class CookieManagement {
  private cookiesFromDom = '';
  private cookiesObj: Record<string, string> = {};
  private readonly deleteDate: string = new Date(0).toUTCString();

  private parseCookies(): void {
    this.cookiesFromDom = document.cookie;

    if (this.cookiesFromDom === '') {
      this.cookiesObj = {};
      return;
    }

    const arrayOfCookies = this.cookiesFromDom.split('; ');

    for (const cookie of arrayOfCookies) {
      const [key, value] = cookie.split('=');
      this.cookiesObj[key] = value;
    }
  }

  set(name: string, value: string, config: CookieProtocol = {}): void {
    const domain = config.domain ? `;domain=${config.domain}` : '';
    const path = config.path ? `;path=${config.path}` : '';
    const secure = config.secure ? `;secure=${config.secure}` : '';
    const expires = config.expires ? `;expires=${config.expires}` : '';

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${domain}${path}${secure}${expires}`;
  }

  get(name: string): string {
    this.parseCookies();
    return this.cookiesObj[name] || '';
  }

  getAll(): Record<string, string> | string {
    this.parseCookies();
    return this.cookiesObj || '';
  }

  update(name: string, value: string, config: CookieProtocol = {}): void {
    this.set(name, value, config);
  }

  delete(name: string): void {
    if (!this.cookiesObj[name]) return;
    document.cookie = `${encodeURIComponent(name)}=;expires=${this.deleteDate}`;
    delete this.cookiesObj[name];
  }

  deleteAll(): void {
    this.parseCookies();
    const cookiesNames = Object.keys(this.cookiesObj);
    for (const cookieName of cookiesNames) {
      document.cookie = `${encodeURIComponent(cookieName)}=;expires=${this.deleteDate}`;
      delete this.cookiesObj[cookieName];
    }
  }
}

export default new CookieManagement();

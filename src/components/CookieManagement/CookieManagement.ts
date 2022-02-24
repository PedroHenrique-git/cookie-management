import Cookie from '../../classes/CookieManagement/CookieManagement';
import createFragment from '../../utils/create-fragment';
import Component from '../Component/Component';
import './styles.css';

class CookieManagement extends Component {
  private nameOfCookie: HTMLInputElement;
  private valueOfCookie: HTMLInputElement;
  private expireOption: HTMLInputElement;
  private pathOption: HTMLInputElement;
  private domainOption: HTMLInputElement;
  private secureOption: HTMLInputElement;
  private createCookieBtn: HTMLButtonElement;
  private getCookieBtn: HTMLButtonElement;
  private getAllCookieBtn: HTMLButtonElement;
  private deleteCookieBtn: HTMLButtonElement;
  private deleteAllCookieBtn: HTMLButtonElement;
  private resultSection: HTMLElement;

  protected createStructure() {
    return String.raw`
        <div class="container">
            <section class="group">
                <h3>Simple values: </h3>
                <div class="input-group">
                    <div class="input-group__name">Name of cookie: </div>
                    <input type="string" name="cookie-name" id="cookie-name" />
                </div>
                <div class="input-group">
                    <div class="input-group__name">Value of cookie: </div>
                    <input type="string" name="cookie-value" id="cookie-value" />
                </div>
            </section>
            <section class="group">
                <h3>Options values: </h3>
                <div class="input-group">
                    <div class="input-group__name">Expires: </div>
                    <input type="date" name="cookie-expires" id="cookie-expires" />
                </div>
                <div class="input-group">
                    <div class="input-group__name">Path: </div>
                    <input type="string" name="cookie-path" id="cookie-path" />
                </div>
                <div class="input-group">
                    <div class="input-group__name">Domain: </div>
                    <input type="string" name="cookie-domain" id="cookie-domain" />
                </div>
                <div class="input-group">
                    <div class="input-group__name">Secure: </div>
                    <input type="string" name="cookie-secure" id="cookie-secure" />
                </div>
            </section>
            <section class="group">
              <button class="btn create">create cookie</button>
              <button class="btn get-cookie">get cookie</button>
              <button class="btn delete-cookie">delete cookie</button>
              <button class="btn delete-all-cookie">delete all</button>
              <button class="btn get-all-cookie">get all</button>
            </section>
            <pre class="results"></pre>
        </div>
    `;
  }

  protected selectors() {
    this.nameOfCookie = document.querySelector('#cookie-name') as HTMLInputElement;
    this.valueOfCookie = document.querySelector('#cookie-value') as HTMLInputElement;
    this.expireOption = document.querySelector('#cookie-expires') as HTMLInputElement;
    this.pathOption = document.querySelector('#cookie-path') as HTMLInputElement;
    this.domainOption = document.querySelector('#cookie-domain') as HTMLInputElement;
    this.secureOption = document.querySelector('#cookie-secure') as HTMLInputElement;
    this.createCookieBtn = document.querySelector('.btn.create') as HTMLButtonElement;
    this.getCookieBtn = document.querySelector('.btn.get-cookie') as HTMLButtonElement;
    this.getAllCookieBtn = document.querySelector('.btn.get-all-cookie') as HTMLButtonElement;
    this.deleteCookieBtn = document.querySelector('.btn.delete-cookie') as HTMLButtonElement;
    this.deleteAllCookieBtn = document.querySelector('.btn.delete-all-cookie') as HTMLButtonElement;
    this.resultSection = document.querySelector('.results') as HTMLElement;
  }

  protected events() {
    this.createCookieBtn.addEventListener('click', this.createCookieFn.bind(this));
    this.deleteCookieBtn.addEventListener('click', this.deleteCookieFn.bind(this));
    this.deleteAllCookieBtn.addEventListener('click', this.deleteAllCookieFn.bind(this));
    this.getAllCookieBtn.addEventListener('click', this.getAllCookiesFn.bind(this));
    this.getCookieBtn.addEventListener('click', this.getCookieFn.bind(this));
  }

  private createCookieFn() {
    const name = this.nameOfCookie.value;
    const value = this.valueOfCookie.value;
    const date = new Date(this.expireOption.value).toUTCString();

    Cookie.set(name, value, {
      domain: this.domainOption.value,
      path: this.pathOption.value,
      expires: date,
      secure: this.secureOption.value,
    });
  }

  private getCookieFn() {
    const name = this.nameOfCookie.value;
    const cookie = Cookie.get(name);
    this.resultSection.textContent = JSON.stringify(cookie);
  }

  private getAllCookiesFn() {
    const cookies = Cookie.getAll();
    this.resultSection.textContent = JSON.stringify(cookies);
  }

  private deleteCookieFn() {
    const name = this.nameOfCookie.value;
    Cookie.delete(name);
  }

  private deleteAllCookieFn() {
    Cookie.deleteAll();
  }

  render() {
    this.app.appendChild(createFragment(this.createStructure()));
    this.selectors();
    this.events();
  }
}

export default new CookieManagement().render();

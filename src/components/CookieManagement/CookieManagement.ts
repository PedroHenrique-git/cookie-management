import Cookie from '../../classes/CookieManagement/CookieManagement';
import cookieManagementTemplate from "./cookie-management-template";

export default class CookieManagement {
    private readonly template: DocumentFragment = cookieManagementTemplate;
    private app: HTMLElement;
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

    constructor(app: HTMLElement) {
        this.app = app;
    }

    selectors() {
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
        this.deleteAllCookieBtn = document.querySelector('.btn.delete-all-cookie')as HTMLButtonElement;
        this.resultSection = document.querySelector('.results') as HTMLElement;
    }

    events() {
        this.createCookieBtn.addEventListener('click', this.createCookieFn.bind(this));
        this.deleteCookieBtn.addEventListener('click', this.deleteCookieFn.bind(this));
        this.deleteAllCookieBtn.addEventListener('click', this.deleteAllCookieFn.bind(this));
        this.getAllCookieBtn.addEventListener('click', this.getAllCookiesFn.bind(this));
        this.getCookieBtn.addEventListener('click', this.getCookieFn.bind(this));
    }

    createCookieFn() {
        const name = this.nameOfCookie.value;
        const value = this.valueOfCookie.value;
        const date = new Date(this.expireOption.value).toUTCString();

        Cookie.set(name, value, {
            domain: this.domainOption.value,
            path: this.pathOption.value,
            expires: date,
            secure: this.secureOption.value
        });
    }

    getCookieFn() {
        const name = this.nameOfCookie.value;
        const cookie = Cookie.get(name);
        this.resultSection.textContent = JSON.stringify(cookie);
    }

    getAllCookiesFn() {
        const cookies = Cookie.getAll();
        this.resultSection.textContent = JSON.stringify(cookies);  
    }

    deleteCookieFn() {
        const name = this.nameOfCookie.value;
        Cookie.delete(name);
    }

    deleteAllCookieFn() {
        Cookie.deleteAll();
    }

    render() {
        this.app.appendChild(this.template);
        this.selectors();
        this.events();
    }
}
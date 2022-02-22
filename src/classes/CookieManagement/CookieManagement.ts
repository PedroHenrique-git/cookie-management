import { CookieProtocol } from "../../domain/cookie-config-protocol/cookie-protocol";

class CookieManagement {
    private cookiesFromDom = document.cookie;
    private cookiesObj: { [key: string]: string } = {};
    private deleteDate: string = new Date(0).toUTCString(); 

    private parseCookies(): void {
        if(this.cookiesFromDom === '') return;

        console.log(this.cookiesFromDom)
        const arrayOfCookies = this.cookiesFromDom.split('; ');

        for(const cookie of arrayOfCookies) {
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

    get(name: string = ''): string {
        this.parseCookies();
        return this.cookiesObj[name] || "";
    }

    getAll(): { [key: string]: string } {
        this.parseCookies();
        return this.cookiesObj;
    }

    update(name: string, value: string, config: CookieProtocol = {}): void {
        this.set(name, value, config);
    }

    delete(name: string = ''): void {
        document.cookie = `${encodeURIComponent(name)}=;expires=${this.deleteDate}`;
    }

    deleteAll(): void {
        this.parseCookies();
        const cookiesNames = Object.keys(this.cookiesObj); 
        for(const cookieName of cookiesNames) {
            document.cookie = `${encodeURIComponent(cookieName)}=;expires=${this.deleteDate}`;    
        }    
    }
}

export default new CookieManagement();
import CookieManagement from "./components/CookieManagement/CookieManagement";

(() => {
    const App = document.querySelector('#app') as HTMLElement;
    new CookieManagement(App).render();
})();

import CookieManagementTemplate from "./components/CookieManagement/CookieManagement";
import createComponent from "./utils/create-component";

(() => {
    const App = document.querySelector('#app') as HTMLElement;
    const CookieManagementComponent = createComponent(CookieManagementTemplate);
    App.appendChild(CookieManagementComponent);
})();

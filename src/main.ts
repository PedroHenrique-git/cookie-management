import CookieManagement from './components/CookieManagement/CookieManagement';
import './main.css';

(() => {
  const App = document.querySelector('#app') as HTMLElement;
  new CookieManagement(App).render();
})();

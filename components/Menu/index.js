import {MainPage} from '../../pages/main/index.js';
import BurgerMenu from '../../src/icons/BurgerMenu.js';
import {VKAuthorize} from '../VKAuthorize/index.js';

export class Menu {
  AddOnClick = () => {
    const items = document.querySelectorAll('.burger-item');
    const root = document.querySelector('#root');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const mainPage = new MainPage(root);
        mainPage.render();
      });
    });
  };

  getUl = () => {
    return document.querySelector('#burger-ul');
  };

  getHTML = () => {
    return `
    <div class="offcanvas offcanvas-end" style= 'width: 15rem;' tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel"> </h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul id = 'burger-ul' class = 'd-flex flex-column gap-3 list-unstyled'>
          <li id='burger-item-1' class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0 '>Главная</button></li>
          <li id='burger-item-2' class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0'>Моя страница</button></li>
          <li id='burger-item-3' class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0'>Люди рядом</button></li>
          <li id='burger-item-4' class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0'>Настройки</button></li>
        </ul>
      </div>
    </div>
    `;
  };

  render(isLight) {
    const menu = document.querySelector('.burger-menu');
    if (menu) {
      menu.remove();
    }

    const root = document.querySelector('#root');
    root.insertAdjacentHTML('beforeend', this.getHTML());
    root.insertAdjacentHTML(
      'beforeend',
      `<button class="burger-menu btn bg-transparent border-0 btn-primary position-fixed z-2" type="button" data-bs-toggle="offcanvas" style='top: 1rem; right: 1rem;' data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    ${BurgerMenu(isLight)}
    </button>`,
    );
    const VK = new VKAuthorize(this.getUl());
    VK.render();

    this.AddOnClick();
  }
}

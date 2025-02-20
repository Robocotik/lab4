import {LightIcon} from '../../src/icons/lightIcon.js';
import {Menu} from '../Menu/index.js';

export class LightSwitch {
  constructor() {
    this.isLight = !document.documentElement.hasAttribute('theme');
  }

  addOnClick = () => {
    const lightSwitch = document.querySelector('#lightSwitch');
    lightSwitch.addEventListener('click', () => {
      if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
      } else {
        document.documentElement.setAttribute('theme', 'dark');
      }

      this.isLight = !this.isLight;
      const burgerMenu = new Menu();
      burgerMenu.render(this.isLight);
      lightSwitch.remove();
      this.render();
    });
  };

  getHTML = isLight => {
    return `
        <button id='lightSwitch' class = 'bg-transparent rounded-3 position-fixed ratio ratio-1x1 border-0' style='height: 2rem; width: 2.7rem; top:4rem; right:1rem;' >${LightIcon(
          isLight,
        )}</button>
        `;
  };
  render() {
    const root = document.querySelector('#root');
    root.insertAdjacentHTML('beforeend', this.getHTML(this.isLight));
    this.addOnClick();
  }
}

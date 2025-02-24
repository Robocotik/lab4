import {ajax} from '../../modules/ajax.js';
import {urls} from '../../modules/urls.js';
import {Menu} from '../../components/Menu/index.js';
import {LightSwitch} from '../../components/lightSwitch/index.js';
export class PersonPage {
  constructor() {}

  getHTML = data => {
    console.log(data);
    return `
        
            <div class = 'd-flex flex-column shadow-lg  w-100 justify-content-center align-items-end' style='padding-inline: 8rem;'>
              <img src = './../../src/sakura.jpg' class = 'rounded-bottom-5 border border-2 adaptive-shadow border-white position-relative w-100 object-fit-cover' style='height: 20rem;' />
              <img src = '${
                data.photo_400_orig ?? './../../src/sakura.jpg'
              }' class = 'img-fluid rounded-circle ratio ratio-1x1 adaptive-shadow position-absolute border border-5 border-white' style='width: 15rem; top: 12.5rem; left: 17.5rem;'> </img>
              <div class = 'd-flex gap-5 align-items-center border-bottom w-100 justify-content-end' style='height: 10rem;'>
                <p class = 'fs-2 fw-bold my-auto adaptive-text'>${
                  data.first_name ?? 'empty'
                } ${data.last_name ?? 'empty'}</p>   
                <div class = 'd-flex gap-3 align-items-center'>
                  <button class = 'bg-transparent adaptive-shadow adaptive-text p-1 px-2 rounded-3'style='height: fit-content' >Добавить в друзья </button>
                  <button class = 'bg-transparent adaptive-shadow adaptive-text p-1 px-2 rounded-3' >Написать сообщение </button>
                </div>
              </div>
              
              <div class = 'w-100 d-flex mt-5 justify-content-between adaptive-text'>
                <div class = 'd-flex flex-column adaptive-shadow lh-base rounded-4 gap-2 border border-2' style='width: 32%; padding: 2rem;'>
                  <p class = 'fs-3 fw-bold text-center'>Краткая информация</p>
                  ${data.last_seen && `<p>${data.last_seen.time}</p>`}
                  <p>Город: ${data.city ?? 'empty'} </p>
                </div>
                <div class = 'd-flex flex-column adaptive-shadow lh-base justify-content-center align-items-center rounded-4 border-2 border' style = 'padding: 2rem; width: 63%; height: 20rem;'>   
                  <p class = 'fs-2 fw-bold'>Публикации</p>
                </div> 
              </div>
            </div>
        `;
  };

  getData(groupId) {
    ajax.get(urls.getUserInfo(groupId), data => {
      root.insertAdjacentHTML('beforeend', this.getHTML(data.response[0]));
    });
  }

  render(groupId) {
    const root = document.querySelector('#root');
    root.innerHTML = '';
    this.getData(groupId);
    const light = new LightSwitch();
    const menu = new Menu();
    menu.render(!document.documentElement.hasAttribute('theme'));
    light.render();
  }
}

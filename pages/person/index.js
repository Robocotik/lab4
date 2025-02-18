import {ajax} from '../../modules/ajax.js';
import {urls} from '../../modules/urls.js';

export class PersonPage {
  constructor() {}

  getHTML = data => {
    console.log(data);
    return `
            <div class = 'd-flex flex-column shadow-lg  w-100 justify-content-center align-items-end' style='padding-inline: 8rem;'>
              <img src = './../../src/sakura.jpg' class = 'rounded-bottom-5 position-relative w-100 object-fit-cover' style='height: 20rem;' />
              <img src = '${
                data.photo_400_orig ?? './../../src/sakura.jpg'
              }' class = 'img-fluid rounded-circle ratio ratio-1x1 position-absolute border border-5 border-white' style='width: 15rem; top: 12.5rem; left: 17.5rem;'> </img>
              <div class = 'd-flex gap-5 align-items-center border-bottom w-100 justify-content-end' style='height: 10rem;'>
                <p class = 'fs-2 fw-bold my-auto'>${
                  data.first_name ?? 'empty'
                } ${data.last_name ?? 'empty'}</p>   
                <div class = 'd-flex gap-3 align-items-center'>
                  <button class = 'bg-primary p-1 px-2 rounded-3 text-white'style='height: fit-content' >Добавить в друзья </button>
                  <button class = 'bg-secondary text-black p-1 px-2 rounded-3 text-white' >Написать сообщение </button>
                </div>
              </div>
              
              <div class = 'w-100 d-flex mt-5 justify-content-between'>
                <div class = 'd-flex flex-column lh-base rounded-4 gap-2 border border-2 shadow-lg' style='width: 32%; padding: 2rem;'>
                  <p class = 'fs-3 fw-bold'>Краткая информация</p>
                  ${data.last_seen && `<p>${data.last_seen.time}</p>`}
                  <p>Город: ${data.city.title ?? 'empty'} </p>
                </div>
                <div class = 'd-flex flex-column lh-base justify-content-center shadow-lg align-items-center rounded-4 border-2 border' style = 'padding: 2rem; width: 63%; height: 20rem;'>   
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
  }
}

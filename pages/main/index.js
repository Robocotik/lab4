import {ajax} from '../../modules/ajax.js';
import {urls} from '../../modules/urls.js';
import {groupId} from '../../modules/consts.js';
import {PersonCard} from '../../components/PersonCard/index.js';
import {GroupCard} from '../../components/GroupCard/index.js';
import {DefaultUsecaase} from '../../components/GroupCard/GroupCard.usecase.js';
import {PersonPage} from '../person/index.js';
import {Dropdown} from '../../components/Dropdown/index.js';
import {CheckBox} from '../../components/CheckBox/index.js';
import {Menu} from '../../components/Menu/index.js';
import {LightSwitch} from '../../components/lightSwitch/index.js';
export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.data = {
      usersToShow: 20,
      offset: 0,
      onlyFriends: true,
      maxCountUsers: 20,
    };
  }

  get listRoot() {
    return document.getElementById('list-root');
  }

  get listRootCol2() {
    return document.getElementById('list-root-col2');
  }

  get blurRoot() {
    return document.getElementById('blur');
  }
  get dropdownRoot() {
    return document.getElementById('dropdown');
  }
  get checkRoot() {
    return document.getElementById('checkbox');
  }

  renderData(items) {
    items.forEach((item, index) => {
      const personCard = new PersonCard(
        index % 2 === 1 ? this.listRoot : this.listRootCol2,
      );
      personCard.render(item);
    });
    this.addOnClick();
  }

  getData = () => {
    ajax.get(
      urls.getGroupMembers(
        groupId,
        this.data.usersToShow,
        this.data.offset,
        this.data.onlyFriends,
      ),
      dataSended => {
        this.listRoot.innerHTML = '';
        this.listRootCol2.innerHTML = '';
        this.data.maxCountUsers = dataSended.response.count; // Обновляем maxCountUsers в объекте data
        this.renderData(dataSended.response.items);
      },
    );
  };

  onClick = e => {
    console.log(e.target.id);
    const personPage = new PersonPage();
    personPage.render(e.target.id);
  };

  addOnClick = () => {
    const items = document.querySelectorAll('.person_item');
    items.forEach(item => {
      item.addEventListener('click', e => this.onClick(e));
    });
  };

  updateDynamicContainer(callback) {
    // Очищаем старое содержимое контейнера
    this.dropdownRoot.innerHTML = '';
    this.checkRoot.innerHTML = '';
    // Создаем новые компоненты с новыми данными
    const checkBox = new CheckBox(this.checkRoot, callback, this.data);
    const dropdown = new Dropdown(this.dropdownRoot, callback, this.data);
    // Рендерим новые компоненты
    checkBox.render();
    dropdown.render();
  }

  getHTML() {
    return `
      <div class = "w-100 h-100 p-5 ">
        <div id='main-page' class="main w-100 overflow-auto  rounded-5 border border-2 ">
          <div id='blur' class = 'blur'>
            <div class='list-container d-flex gap-3'>
            <div class = 'list' id="list-root"> </div>
            <div class = 'list mt-5' id="list-root-col2"> </div>
          </div>
          <div id='dynamic' class = 'd-flex flex-column gap-3 justify-content-start align-items-center' style='height: 3rem;'>
            <div id='dropdown' class = 'd-flex gap-3 justify-content-center align-items-center' > </div>
            <div id='checkbox'> </div>
          </div>
          </div>
        </div>
      </div>
        `;
  }

  render() {
    this.parent.innerHTML = '';
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);
    const groupCard = new GroupCard(this.blurRoot);
    this.updateDynamicContainer(this.getData);
    groupCard.render(DefaultUsecaase);
    const light = new LightSwitch();
    const menu = new Menu();
    menu.render(!document.documentElement.hasAttribute('theme'));
    light.render();
  }
}

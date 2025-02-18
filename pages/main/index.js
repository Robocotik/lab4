import {ajax} from '../../modules/ajax.js';
import {urls} from '../../modules/urls.js';
import {groupId} from '../../modules/consts.js';
import {PersonCard} from '../../components/PersonCard/index.js';
import {GroupCard} from '../../components/GroupCard/index.js';
import {DefaultUsecaase} from '../../components/GroupCard/GroupCard.usecase.js';
import {PersonPage} from '../person/index.js';
import {Dropdown} from '../../components/Dropdown/index.js';
import BurgerMenu from '../../src/icons/BurgerMenu.js';
import {CheckBox} from '../../components/CheckBox/index.js';
export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.usersToShow = 20;
    this.offset = 0;
    this.onlyFriends = true;
  }
  get listRoot() {
    return document.getElementById('list-root');
  }

  get listRootCol2() {
    return document.getElementById('list-root-col2');
  }

  get pageRoot() {
    return document.getElementById('main-page');
  }

  get blurRoot() {
    return document.getElementById('blur');
  }
  get mainRoot() {
    return document.getElementById('root');
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
        index % 2 == 1 ? this.listRoot : this.listRootCol2,
      );
      personCard.render(item);
    });
    this.addOnClick();
  }

  getData = (count, offset, onlyFriends) => {
    ajax.get(
      urls.getGroupMembers(groupId, count, offset, onlyFriends),
      data => {
        this.listRoot.innerHTML = '';
        this.listRootCol2.innerHTML = '';
        this.renderData(data.response.items);
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

  getMenu = () => {
    return `
    <button class="burger-menu btn bg-transparent border-0 btn-primary position-absolute z-2" type="button" data-bs-toggle="offcanvas" style='top: 1rem; right: 1rem;' data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    ${BurgerMenu()}
    </button>

    <div class="offcanvas offcanvas-end" style= 'width: 15rem;' tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel"> </h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class = 'd-flex flex-column gap-3 list-unstyled'>
          <li class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0 '>Главная</button></li>
          <li class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0'>Моя страница</button></li>
          <li class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0'>Люди рядом</button></li>
          <li class='burger-item mx-auto rounded-2'><button class = 'bg-transparent border-0'>Настройки</button></li>
        </ul>
      </div>
    </div>
    `;
  };

  getHTML() {
    return `
      <div class = "w-100 h-100 p-5 ">
      ${this.getMenu()}
        <div id='main-page' class="main w-100 overflow-auto  rounded-5 border border-2 ">
          <div id='blur' class = 'blur'>
            <div class='list-container d-flex gap-3'>
            <div class = 'list' id="list-root"> </div>
            <div class = 'list mt-5' id="list-root-col2"> </div>
          </div>
          <div class = 'd-flex flex-column gap-3 justify-content-start align-items-center' style='height: 3rem;'>
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
    const checkBox = new CheckBox(this.checkRoot, this.getData, this.usersToShow, this.offset, this.onlyFriends);
    const dropdown = new Dropdown(
      this.dropdownRoot,
      this.usersToShow,
      this.offset,
      this.onlyFriends,
      this.getData,
    );

    dropdown.render();
    checkBox.render();
    groupCard.render(DefaultUsecaase);
  }
}

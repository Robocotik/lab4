import {ajax} from '../../modules/ajax.js';
import {urls} from '../../modules/urls.js';
import {groupId} from '../../modules/consts.js';
import {PersonCard} from '../../components/PersonCard/index.js';
import {GroupCard} from '../../components/GroupCard/index.js';
import {DefaultUsecaase} from '../../components/GroupCard/GroupCard.usecase.js';
export class MainPage {
  constructor(parent) {
    this.parent = parent;
  }
  get listRoot() {
    return document.getElementById('list-root');
  }

  get pageRoot() {
    return document.getElementById('main-page');
  }

  getData() {
    ajax.get(urls.getGroupMembers(groupId), data => {
      this.renderData(data.response.items);
    });
  }
  renderData(items) {
    items.forEach(item => {
      const personCard = new PersonCard(this.listRoot);
      personCard.render(item);
    });
  }
  getHTML() {
    return `
      <div class = "w-100 h-100 p-5 ">
        <div id='main-page' class="main w-100 overflow-auto  rounded-5 border border-2 ">
          <div class = 'blur'>
          <div class = 'list' id="list-root"> </div>
          </div>
        <div/>
      </div>
            
        `;
  }

  render() {
    this.parent.innerHTML = '';
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);

    const groupCard = new GroupCard(this.pageRoot);
    groupCard.render(DefaultUsecaase);

    this.getData();
  }
}

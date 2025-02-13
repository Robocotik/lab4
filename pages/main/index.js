import {ajax} from '../../modules/ajax.js';
import {urls} from '../../modules/urls.js';
import {groupId} from '../../modules/consts.js';
import {PersonCard} from '../../components/PersonCard/index.js';

export class MainPage {
  constructor(parent) {
    this.parent = parent;
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
      const personCard = new PersonCard(this.pageRoot);
      personCard.render(item);
    });
  }
  getHTML() {
    return `
      <div class = "w-100 h-100 p-5 ">
        <div  class="main w-100 overflow-auto  rounded-5 border border-2 ">
          <div class = 'blur flex-nowrap gap-4' id="main-page">
          </div>
        <div/>
      </div>
            
        `;
  }

  render() {
    this.parent.innerHTML = '';
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);

    this.getData();
  }
}

import {NextButton} from '../Pagination/components/NextButton/index.js';
import {PrevButton} from '../Pagination/components/PrevButton/index.js';
export class Dropdown {
  constructor(parent, value, offset, onlyFriends, callback) {
    this.parent = parent;
    this.value = value;
    this.onlyFriends = onlyFriends;
    this.callback = callback;
    this.offset = offset;
  }

  onClick = e => {
    // Проверяем, что кликнули на элемент списка
    if (e.target.classList.contains('dropdown-item')) {
      // Удаляем класс active у всех элементов списка
      const items = this.parent.querySelectorAll('.dropdown-item');
      items.forEach(item => item.classList.remove('active'));

      e.target.classList.add('active');

      this.value = Number(e.target.textContent);
      // Перерендер компонента
      this.render();
    }
  };

  getHTML = () => {
    return `
        <div class="dropdown-center h-100">
            <button class="btn h-100 btn-secondary bg-transparent text-black border-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${this.value}
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item ${
                  this.value === '20' ? 'active' : ''
                }" href="#">20</a></li>
                <li><a class="dropdown-item ${
                  this.value === '60' ? 'active' : ''
                }" href="#">60</a></li>
                <li><a class="dropdown-item ${
                  this.value === '100' ? 'active' : ''
                }" href="#">100</a></li>
            </ul>
        </div>
        `;
  };

  render() {
  
    const prevbtn = new PrevButton(this.parent);
    const nextBtn = new NextButton(this.parent);

    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getHTML());

    prevbtn.render(this.callback, this.value, this.offset, this.onlyFriends);
    nextBtn.render(this.callback, this.value, this.offset, this.onlyFriends);

    const dropdownItems = this.parent.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', this.onClick);
    });

    this.callback(this.value, this.offset, this.onlyFriends ? 'friends' : '');

  }
}

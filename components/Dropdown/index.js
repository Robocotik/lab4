import {NextButton} from '../Pagination/components/NextButton/index.js';
import {PrevButton} from '../Pagination/components/PrevButton/index.js';

export class Dropdown {
  constructor(parent, callback, data) {
    this.parent = parent;
    this.callback = callback;
    this.data = data;
  }

  onClick = e => {
    // Проверяем, что кликнули на элемент списка
    if (e.target.classList.contains('dropdown-item')) {
      // Удаляем класс active у всех элементов списка
      const items = this.parent.querySelectorAll('.dropdown-item');
      items.forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
      this.data.offset = 0;
      this.data.usersToShow = Number(e.target.textContent);
      this.callback(this.data); // Вызываем callback для обновления данных
      this.render();
    }
  };

  getHTML = () => {
    return `
        <div class="dropdown-center h-100">
            <button class="btn h-100 btn-secondary bg-transparent text-black border-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${this.data.usersToShow}
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item ${
                  this.data.usersToShow === 20 ? 'active' : ''
                }" href="#">20</a></li>
                <li><a class="dropdown-item ${
                  this.data.usersToShow === 60 ? 'active' : ''
                }" href="#">60</a></li>
                <li><a class="dropdown-item ${
                  this.data.usersToShow === 100 ? 'active' : ''
                }" href="#">100</a></li>
            </ul>
        </div>
        `;
  };

  render() {
    console.log('DROPDOWN UPDATED');
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getHTML());
    const prevbtn = new PrevButton(this.parent);
    const nextBtn = new NextButton(this.parent);
    prevbtn.render(this.callback, this.data);
    nextBtn.render(this.callback, this.data);
    const dropdownItems = this.parent.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', this.onClick);
    });
    this.callback(); // Вызываем callback для получения данных
  }
}

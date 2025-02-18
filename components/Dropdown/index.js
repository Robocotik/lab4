import {NextButton} from '../Pagination/components/NextButton/index.js';
import {PrevButton} from '../Pagination/components/PrevButton/index.js';
export class Dropdown {
  constructor(parent, value, offset, callback) {
    this.parent = parent;
    this.value = value;
    this.callback = callback;
    this.offset = offset;
  }

  onClick = e => {
    // Проверяем, что кликнули на элемент списка
    if (e.target.classList.contains('dropdown-item')) {
      // Удаляем класс active у всех элементов списка
      const items = this.parent.querySelectorAll('.dropdown-item');
      items.forEach(item => item.classList.remove('active'));

      // Добавляем класс active к выбранному элементу
      e.target.classList.add('active');

      // Обновляем значение this.phrase и this.value
      console.log(typeof this.value);
      this.value = Number(e.target.textContent);
      console.log('Выбранное значение:', this.value, typeof this.value); // Для проверки

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
    // Удаляем старый HTML перед рендерингом нового

    const prevbtn = new PrevButton(this.parent);
    const nextBtn = new NextButton(this.parent);

    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getHTML());

    prevbtn.render(this.callback, this.value, this.offset);
    nextBtn.render(this.callback, this.value, this.offset);

    // Добавляем обработчик события клика
    const dropdownItems = this.parent.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', this.onClick);
    });

    // Вызываем коллбэк с текущим значением
    console.log(
      'drop before',
      this.value,
      typeof this.value,
      this.offset,
      typeof this.offset,
    );
    this.callback(this.value, this.offset);
    console.log(
      'drop after',
      this.value,
      typeof this.value,
      this.offset,
      typeof this.offset,
    );
  }
}

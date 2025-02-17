export class Dropdown {
  constructor(parent, value, callback) {
    this.parent = parent;
    this.value = value;
    this.phrase = value;
    this.callback = callback;
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
      this.phrase = e.target.textContent;
      this.value = e.target.textContent;
      console.log('Выбранное значение:', this.phrase); // Для проверки

      // Перерендер компонента
      this.render();
    }
  };

  getHTML = () => {
    return `
        <div class="dropdown-center">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${this.phrase}
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item ${
                  this.phrase === '20' ? 'active' : ''
                }" href="#">20</a></li>
                <li><a class="dropdown-item ${
                  this.phrase === '60' ? 'active' : ''
                }" href="#">60</a></li>
                <li><a class="dropdown-item ${
                  this.phrase === '100' ? 'active' : ''
                }" href="#">100</a></li>
            </ul>
        </div>
        `;
  };

  render() {
    // Удаляем старый HTML перед рендерингом нового
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getHTML());

    // Добавляем обработчик события клика
    const dropdownItems = this.parent.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', this.onClick);
    });

    // Вызываем коллбэк с текущим значением
    
      this.callback(this.value);
    
  }
}

export class CheckBox {
  constructor(parent, callback, data) {
    this.parent = parent;
    this.callback = callback;
    this.data = data;
  }

  addOnClick = () => {
    const check = document.querySelector('#flexCheckChecked');
    check.addEventListener('click', () => {
      this.data.onlyFriends = !this.data.onlyFriends; // Переключаем значение
      this.callback(); // Вызываем callback для обновления данных
      console.log(this.data);
    });
  };

  getHTML = () => {
    return `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value=${
              this.data.onlyFriends
            } id="flexCheckChecked" ${this.data.onlyFriends ? 'checked' : ''}>
            <label class="form-check-label" for="flexCheckChecked">
                Отобразить только друзей
            </label>
        </div>
        `;
  };

  render() {
    console.log('CHECKBOX UPDATED', this.parent);
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getHTML());
    this.addOnClick();
  }
}

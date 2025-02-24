export class CheckSex {
  constructor(parent, callback, data) {
    this.parent = parent;
    this.callback = callback;
    this.data = data;
  }

  addOnClick = () => {
    const check = document.querySelector('#flexCheckSex');
    check.addEventListener('click', () => {
      this.data.onlyMales = !this.data.onlyMales; // Переключаем значение
      this.data.offset = 0;
      this.callback(); // Вызываем callback для обновления данных
      console.log(this.data);
    });
  };

  getHTML = () => {
    return `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value=${
              this.data.onlyMales
            } id="flexCheckSex" ${this.data.onlyMales ? 'checked' : ''}>
            <label class="form-check-label text-black" for="flexCheckSex">
                Отобразить только мужчин
            </label>
        </div>
        `;
  };

  render() {
    console.log('У СЕКСА ', this.data);
    console.log('flexCheckSex UPDATED', this.parent);
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', this.getHTML());
    this.addOnClick();
  }
}

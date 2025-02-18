export class CheckBox {
  constructor(parent, callback, count, offset, selected) {
    this.parent = parent;
    this.selected = selected;
    this.callback = callback;
    this.count = count;
    this.offset = offset;
  }

  addOnClick = () => {
    const check = document.querySelector('#flexCheckChecked');
    check.addEventListener('click', () => {
      this.selected = !this.selected;
      this.callback(this.count, this.offset, this.selected? 'friends': '');
      console.log(this.count, this.offset ,this.selected);
    })
  } 

  getHTML = () => {
    return `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value=${this.selected} id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                Отобразить только друзей
            </label>
        </div>
        `;
  };

  render() {
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);
    this.addOnClick();
  }
}

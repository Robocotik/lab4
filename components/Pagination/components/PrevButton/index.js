export class PrevButton {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML = () => {
    return `
            <button id = 'btn_prev' class = 'pag_item bg-transparent rounded-3 px-3 py-1 border-white'><</button>
        `;
  };
  PaginationOnClick = (update, count, offset) => {
    const prev = document.querySelector('#btn_prev');
    prev.addEventListener('click', () => {
      offset = offset - count >= 0 ? offset - count : 0;
      console.log(count, typeof count, offset, typeof offset);
      update(count, offset);
    });
  };

  render(update, count, offset) {
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('afterbegin', html);
    this.PaginationOnClick(update, count, offset);
    
  }
}

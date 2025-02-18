export class NextButton {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML = () => {
    return `
            <button id = 'btn_next' class = 'pag_item bg-transparent rounded-3 px-3 h-100 border-white'>></button>
        `;
  };

  PaginationOnClick = (update, count, offset) => {
    const next = document.querySelector('#btn_next');
    next.addEventListener('click', () => {
      offset += count;
      console.log(count, typeof count, offset, typeof offset);
      update(count, offset);
    });
  };


  render(update, count, offset) {
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);
    this.PaginationOnClick(update, count, offset);
  }
}

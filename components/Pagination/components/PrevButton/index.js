export class PrevButton {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML = () => {
    return `
            <button id = 'btn_prev' class = 'pag_item bg-transparent rounded-3 px-3 h-100 border-white'><</button>
        `;
  };
  PaginationOnClick = (update, data) => {
    const prev = document.querySelector('#btn_prev');
    prev.addEventListener('click', () => {
      console.log('preeev', data.offset, data.usersToShow);
      data.offset =
        data.offset - data.usersToShow >= 0
          ? data.offset - data.usersToShow
          : 0;
      console.log(
        data.usersToShow,
        typeof data.usersToShow,
        data.offset,
        typeof data.offset,
      );
      update(data);
    });
  };

  render(update, data) {
    console.log('PREV BUTTON UPDATED', data);
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('afterbegin', html);
    this.PaginationOnClick(update, data);
  }
}

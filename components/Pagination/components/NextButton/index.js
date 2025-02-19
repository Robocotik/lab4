export class NextButton {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML = () => {
    return `
            <button id = 'btn_next' class = 'pag_item bg-transparent rounded-3 px-3 h-100 border-white'>></button>
        `;
  };

  PaginationOnClick = (update, data) => {
    const next = document.querySelector('#btn_next');
    next.addEventListener('click', () => {
      data.offset =
        data.maxCountUsers - data.offset - data.usersToShow >= 0
          ? data.offset + data.usersToShow
          : data.offset;
      console.log(
        'locally, ',
        data.usersToShow,
        typeof data.usersToShow,
        data.offset,
        typeof data.offset,
      );
      update(data);
    });
  };

  render(update, data) {
    console.log('NEXT BUTTON UPDATED');
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);
    this.PaginationOnClick(update, data);
  }
}

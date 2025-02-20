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
      if (data.maxCountUsers - data.offset - data.usersToShow >= 0) {
        data.offset = data.offset + data.usersToShow;
        update(data);
      }
      console.log(
        'locally, ',
        data.usersToShow,
        typeof data.usersToShow,
        data.offset,
        typeof data.offset,
      );
    });
  };

  render(update, data) {
    console.log('NEXT BUTTON UPDATED');
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);
    this.PaginationOnClick(update, data);
  }
}

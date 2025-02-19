export class NextButton {
  constructor(parent, maxCount) {
    this.parent = parent;
    this.maxCount = maxCount;
  }
  getHTML = () => {
    return `
            <button id = 'btn_next' class = 'pag_item bg-transparent rounded-3 px-3 h-100 border-white'>></button>
        `;
  };

  PaginationOnClick = (update, count, offset, onlyFriends) => {
    const next = document.querySelector('#btn_next');
    next.addEventListener('click', () => {
      offset = this.maxCount - offset >= 0 ? offset + count : offset;
      console.log(count, typeof count, offset, typeof offset);
      update(count, offset, onlyFriends ? 'friends' : '');
    });
  };

  render(update, count, offset, onlyFriends) {
    console.log('NEXT BUTTON UPDATED');
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);
    this.PaginationOnClick(update, count, offset, onlyFriends);
  }
}

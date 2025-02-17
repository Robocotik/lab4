export class Onliner {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML = isOnline => {
    return `
            <div class='${
              isOnline ? 'green' : 'red'
            } ratio ratio-1x1 rounded-circle' style=' box-shadow: 0px 0px 5px ${
      isOnline ? 'green' : 'red'
    }; width: 1rem;'></div>
        `;
  };

  render(isOnline) {
    this.parent.insertAdjacentHTML('beforeend', this.getHTML(isOnline));
  }
}

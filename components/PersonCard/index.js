export class PersonCard {
  constructor(parent) {
    this.parent = parent;
  }

  getOnliner = isOnline => {
    return `
            <div class='anim bg-${
              isOnline ? 'success' : 'danger'
            } ratio ratio-1x1 rounded-circle position-absolute' style=' top:1rem; right: 1rem;  box-shadow: 0px 0px 5px ${
      isOnline ? 'green' : 'red'
    }; width: 1rem; height: 1rem'></div>
        `;
  };

  getHTML = data => {
    return `
        <button id='${
          data.id
        }' class='d-flex flex-column  position-relative bg-transparent gap-4 border border-2 rounded-5 px-3 py-2 shadow-lg' style='width: fit-content;'>
            <img src='${data.photo_400_orig}'id=${
      data.id
    } class='person_item img-fluid rounded-circle ratio-1x1' style='width: 8rem;' alt='я' />
            <div class='d-flex justify-content-center fs-5'>
                <p>${data.first_name}</p>
            </div>
            ${this.getOnliner(data.online)}

        </button>
        `;
  };

  render(data) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML('beforeend', html);
  }
}

export class GroupCard {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML = data => {
    return `
        <div class='d-flex gap-4 align-items-center border border-2 z-1 rounded-5 px-4 py-2 shadow-lg' style='height:fit-content; width: fit-content; min-width: 25rem; max-width: 25rem;'>
            <a href="...">
                <img src='${data.photo}' class='img-fluid rounded-circle ratio-1x1' style='width: 8rem;' alt='group' />
            </a>
            <p class='fs-5 fw-bold circle-underline'>${data.label}</p>
        </div>
        `;
  };
  render(data) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML('beforeend', html);
  }
}

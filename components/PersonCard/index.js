export class PersonCard {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML = data => {
    return `
        <div class='d-flex gap-4 border border-2 rounded-5 px-4 py-2 shadow-lg' style='width: fit-content; min-width: 20rem; max-width: 20rem;'>
            <a href="...">
                <img src='${data.photo_400_orig}' class='img-fluid rounded-circle ratio-1x1' style='width: 8rem;' alt='я' />
            </a>
            <div class='d-flex flex-column justify-content-center fs-5 circle-underline'>
                <p>${data.first_name}</p>
                <p>${data.last_name}</p>
            </div>
        </div>
        `;
  };
  render(data) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML('beforeend', html);
  }
}

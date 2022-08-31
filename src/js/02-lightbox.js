import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsOfGallary = createGalleryItems(galleryItems);
let instance;

gallery.innerHTML = itemsOfGallary;

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" />
            </a>
        </div>
      `;
    })
    .join("");
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});

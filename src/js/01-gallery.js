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
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
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

  instance = basicLightbox.create(
    `
        <img
        src="${event.target.dataset.source}" 
        alt="${event.target.alt}"/>
        
    `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEsc);
      },
    }
  );
  instance.show();
});

function onEsc(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
}

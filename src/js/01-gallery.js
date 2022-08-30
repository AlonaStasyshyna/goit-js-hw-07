import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const gallery = document.querySelector(".gallery");
const itemsOfGallary = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", itemsOfGallary);

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

  if (event.target.tagName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
        <img
        class="gallery__image"
        src="${event.target.dataset.source}"/>
    `);
  instance.show();
});

//   document.querySelectorAll(".gallery__image").forEach(function (img) {
//     if (event.target.dataset.source === img.dataset.source) {
//       const instance = basicLightbox.create(`
//       <img
//       class="gallery__image"
//       src="${event.target.dataset.source}"/>
//   `);
//       instance.show();
//     }
//   });

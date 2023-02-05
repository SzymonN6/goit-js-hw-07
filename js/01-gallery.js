import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryPhoto = document.querySelector(".gallery");
const galleryPhotoItems = makeGallery(galleryItems);
galleryPhoto.insertAdjacentHTML("beforeend", galleryPhotoItems);
galleryPhoto.addEventListener("click", openModal);

function makeGallery(photos) {
  return photos
  .map(({preview, original, description}) => {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image"
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"/>
    </a>
    </div>`
  })
  .join("");
}

const instance = basicLightbox.create(
  `<img src = "" />`,
  {
    onShow: () => {
    document.addEventListener("keydown", escBtn);
  },
onClose: () => {
  document.removeEventListener("keydown", escBtn);
},
}
);

function escBtn(ev) {
  if (ev.code === "Escape") {
    instance.close();
  }
};

const url = instance.element().querySelector("img");

function openModal(ev) {
  ev.preventDefault();
  url.src= ev.target.dataset.source;
  instance.element().querySelector("img").src = ev.target.dataset.source;
  instance.show();
};
console.log(galleryItems);

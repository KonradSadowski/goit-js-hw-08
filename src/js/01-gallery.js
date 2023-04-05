// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEL = document.querySelector('.gallery');
// creating img's
for (const image of galleryItems) {
  const imgEl = `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
  <img 
  class="gallery__image"
  src=${image.preview}
  data-source=${image.original}
  alt=${image.description}/>
  
  </a>
  </div>`;

  galleryEL.insertAdjacentHTML('afterbegin', imgEl);
}

const imgClickHandler = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" >`
  );
  instance.show();
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' || event.keyCode === 27) {
      instance.close();
    }
  });
};

galleryEL.addEventListener('click', imgClickHandler);

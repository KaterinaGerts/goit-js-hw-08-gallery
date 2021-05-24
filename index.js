import pictures from './gallery-items.js';

 const galleryImagesEl = document.querySelector('.js-gallery');
// console.log(galleryImagesEl);
const makeGalleryPicturesMarkup = createPicturesMarkup(pictures);
 
galleryImagesEl.insertAdjacentHTML('beforeend', makeGalleryPicturesMarkup);

galleryImagesEl.addEventListener('click', onGalleryPicturecClick);

console.log(createPicturesMarkup(pictures));

 function createPicturesMarkup(pictures) {
   return pictures.map(({ preview, original, description }) => {
     return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${preview}">      
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
</li>
 `;
   }).join('');
  }

function onGalleryPicturecClick(e) {
  const galleryLinkEl = e.target.classList.contains('gallery__link');
  if (!galleryLinkEl) {
    return;
  }
  const currentPicture = document.querySelector('.gallery__link.is-open')

  if (currentPicture) {
    currentPicture.classList.remove('is-open')
  }

  const linkEl = e.target;
  const parentGalleryLink = linkEl.closest('.gallery__link');

  parentGalleryLink.classList.add('is-open');
  
  }
 






// const refs = {
//   overlayEl: document.querySelector('lightbox'),
//   closeBtn: document.querySelector('[data-action="close-lightbox"]')
// }  

// refs.overlayEl.addEventListener('click', onLightBoxClose);

// function onLightBoxClose(e) {
//  e.target.classList.add('is-open');
// }



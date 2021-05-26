import pictures from './gallery-items.js';

 const galleryImagesEl = document.querySelector('.js-gallery');
 const makeGalleryPicturesMarkup = createPicturesMarkup(pictures);
galleryImagesEl.insertAdjacentHTML('beforeend', makeGalleryPicturesMarkup);

const refs = {
    overlayEl: document.querySelector('.lightbox'),
    backdropEl: document.querySelector('.lightbox__overlay'),
    lightBoxImageEl: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('[data-action="close-lightbox"]')
} 
console.log(refs.closeBtn);

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
    
function onGalleryPictureClick(e) {
  e.preventDefault(); 
  console.log(e.target.dataset.source);
  
  const galleryLinkEl = e.target.nodeName;
  if (galleryLinkEl !== 'IMG') {
    return;
  }
  refs.overlayEl.classList.remove('is-open')
  refs.overlayEl.classList.add('is-open')
  const currentImage = e.target;  
  refs.lightBoxImageEl.setAttribute("src", currentImage.dataset.source);
  refs.lightBoxImageEl.setAttribute("alt", currentImage.alt);
}
galleryImagesEl.addEventListener('click', onGalleryPictureClick)

function onCloseBtn() {
refs.overlayEl.classList.remove('is-open')
}
refs.closeBtn.addEventListener('click', onCloseBtn);
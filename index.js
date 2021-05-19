import pictures from './gallery-items.js';

console.log(createPicturesMarkup(pictures));

 function createPicturesMarkup(pictures) {
   const markup = pictures.map(({ preview, original, description }) => {     
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
   })
   console.log(markup);   
  }





// const galleryImagesEl = document.querySelector('.js-gallery');
// console.log(galleryImagesEl);
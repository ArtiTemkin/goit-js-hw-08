import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
console.log(galleryItems);

const galeryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesLibrary(galleryItems);

galeryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

galeryContainer.addEventListener('click', openModalByClick)

function createPicturesLibrary(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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
        `
            
    }).join('')
    // console.log(pictures)
}

function openModalByClick(event) {
    // const isPictureEl = event.target.classlist.contains('gallery__image')
    console.log(event.target.nodeName)

    if (event.target.nodeName !== "IMG") {
        return;
    }

     event.preventDefault();
    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${event.target.dataset.source}" width="800" height="600";
        </div>
    `)

    instance.show()

    window.addEventListener("keydown", closeModal)

    function closeModal(event) {
        console.log(event.code)

        if (event.code === "Escape") {
            instance.close()
            window.removeEventListener("keydown", closeModal)
        }
        
    }
}


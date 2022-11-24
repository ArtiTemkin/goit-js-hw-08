import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
createPicturesLibrary(galleryContainer, galleryItems);
let gallery = new SimpleLightbox('.gallery a');

function createPicturesLibrary(gallery, galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
            const galleryItem = document.createElement('a');
            galleryItem.href = original
            const galleryItemImg = document.createElement("img");
            galleryItemImg.src = preview
            galleryItemImg.alt = description
            galleryItem.appendChild(galleryItemImg)
            gallery.appendChild(galleryItem);
        })
}

// function openModalByClick(event) {
//     console.log(event.target.nodeName)
//     gallery.open(event.target)
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }

//     event.preventDefault();
//     window.addEventListener("keydown", closeModal)
// }

// function closeModal(event) {
//         console.log(event.code)

//         if (event.code === "Escape") {
//             window.removeEventListener("keydown", closeModal)
//         }
// }


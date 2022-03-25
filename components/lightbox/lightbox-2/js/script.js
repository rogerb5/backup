const htmlImage = document.querySelector('.add-img');
const lightbox = document.querySelector('.lightbox-modal');
const galleryImgs = document.querySelectorAll('.gallery-img');

function displayImage(imgSrc) {
    htmlImage.src = imgSrc;
    lightbox.classList.add('active');
    htmlImage.classList.add('showImage');
}

function getImgSrc(images) {
    images.forEach(img => {
        img.addEventListener('click', () => {
            displayImage(img.getAttribute('src'))
        })
    })
}

getImgSrc(galleryImgs);

function closeLightbox(closeBtn) {
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        htmlImage.classList.remove('showImage');
    })
}

const close = document.querySelector('.close');
closeLightbox(close);

function slideImage(moveBtn) {
    moveBtn.forEach(move => {
        move.addEventListener('click', () => {
            console.log('moved');
        })
    })
}
const movers = document.querySelectorAll('.btn');
slideImage(movers);
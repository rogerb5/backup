const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', close);
function close() {
    overlay.classList.remove('active');
}

const divButtons = document.querySelectorAll('.project');
divButtons.forEach(button => {
    button.addEventListener("click", () => {
        const imageSource = button.children[0].src;
        gImages.src = imageSource; /* Assign clicked img src to IMG html src */
        overlay.classList.add('active');
    })
});

const gImages = document.querySelector('.overlayImage');
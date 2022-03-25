const open = document.querySelector('.open');
const modalC = document.querySelector('.modal-container');
const close = document.querySelector('.close');


open.addEventListener('click', function () {
    modalC.classList.add('show');
})

close.addEventListener('click', function () {
    modalC.classList.remove('show');
})
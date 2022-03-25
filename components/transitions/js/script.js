const link = document.querySelector('.link');
const transition = document.querySelector('.transition');
link.addEventListener('click', function (e) {
    e.preventDefault();
    transition.classList.add('slide');
    setTimeout(() => {
        window.location = link.href;
    }, 900)
})
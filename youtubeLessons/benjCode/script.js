const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');


nav.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    setTimeout(() => {
        menu.style.display = 'grid'
    }, 400);
})

const listLi = document.querySelectorAll('.menu ul li a');

const listImage = document.querySelectorAll('.picture');
let currentZIndex = 100;

let lastSeen = listLi[0];
console.log(lastSeen + " Last Seen Image");

listLi.forEach(li => {
    li.addEventListener('mouseenter', () => {
        console.log('mouseenter', li)

        if (lastSeen === li) {
            return;
        }

        const img = [...listImage].find(img => {
            return img.dataset.projectNo === li.dataset.projectNo
        })

        img.style.transition = null
        img.style.opacity = 0;
        img.style.zIndex = currentZIndex++;

        console.log(currentZIndex + "is the current z index");

        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transition = "opacity 700ms ease"
        }, 1)

        lastSeen = li;
    })
})


const bxImg = [...(document.querySelectorAll('.bx-pic'))];

window.addEventListener('scroll', () => {
    const yAxis = (window.scrollY / window.innerHeight) * 2 - 1;
    console.log("Y Axis " + yAxis);
    const speed = 12;

    console.log("X Translation: " + -yAxis * speed);
    for (let i = 0; i < bxImg.length; i++) {
        if (i % 2 == 0) {
            bxImg[i].style.transform = `scale(1.2) translate3D(${-yAxis * speed}px, ${0}px, ${0})`;
        } else {
            bxImg[i].style.transform = `scale(1.2) translate3D(${yAxis * speed}px, ${0}px, ${0})`;
        }
    }
})


function lerp() {

}
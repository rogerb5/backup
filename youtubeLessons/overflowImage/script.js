const bxPic = document.querySelector('.bx-pic');
const bxWp = document.querySelector('.bx-wp');
let shadow = document.querySelector('.shadow');

document.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth) * 2 - 1;
    const yRatio = (e.clientY / window.innerHeight) * 2 - 1;
    const speed = 12;

    let xRatioEased = 0;
    let yRatioEased = 0;
    if (xRatio >= 0) {
        xRatioEased = ease(xRatio);
    } else {
        xRatioEased = -ease(-xRatio)
    }

    if (yRatio >= 0) {
        yRatioEased = ease(yRatio)
    } else {
        yRatioEased = -ease(-yRatio)
    }

    bxPic.style.transform = `scale(1.2) translate3D(${-xRatioEased * speed}px, ${-yRatioEased * speed}px, ${0})`;
    bxWp.style.transform = `translate3D(calc(-50% + ${-xRatioEased * speed}px), calc(-50% + ${-yRatioEased * speed}px), ${0})`;
    shadow.style.transform = `translate3D(calc(-50% + ${-xRatioEased * speed}px), calc(-50% + ${-yRatioEased * speed}px), ${0})`;
})

function ease(ratio) {
    return ratio * 1;
}

function initShadow() {
    shadow.style.width = bxWp.getBoundingClientRect().width + 'px';
    shadow.style.height = bxWp.getBoundingClientRect().height + 'px';
}

window.addEventListener('resize', () => {
    initShadow();
})

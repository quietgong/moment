const body = document.querySelector("body");

const IMG_NUMBER = 3;

function showImage(IMG_NUMBER) {
    const image = new Image();
    image.src = `${IMG_NUMBER}.jpg`
    image.classList.add("bgImage");
    body.append(image);
}

function genRanNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER + 1)
    return number;
}
function init() {
    const randomNumber = genRanNumber();
    showImage(randomNumber);
}
init();
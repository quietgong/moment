const clockContainer = document.querySelector(".js-clock")
    , clockTitle = document.querySelector("h1");

function getDate() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
function init() {
    getDate();
    setInterval(getDate, 1000);
}
init();
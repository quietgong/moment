const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting")

const USER_LS = "currentUser",
    SHOWING_CN = "showing"

function handleSubmit(event){
    event.preventDefault();
    const currentvalue = input.value;
    showGreeting(currentvalue);
    saveName(currentvalue)
}

function saveName(text) {
    localStorage.setItem(USER_LS, text); 
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function showGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `안녕하세요! ${text}`
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        //유저가 없을 때
        askForName();
    } else {
        //유저가 있을 때
        showGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();
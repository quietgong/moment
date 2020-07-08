const weather = document.querySelector(".js-weather")

const COORDS = "coords"
const API_KEY = 'a6b01b6efcc8f47e9befe5c1d932edfd'

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `현재위치 : ${place} <br> 온도 : ${temperature}°C`
    });
}

function saveGeo(coordsobj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsobj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsobj = {
        latitude,
        longitude
    };
    saveGeo(coordsobj)
    getWeather(latitude, longitude);
}
function handleGeoError() {
    console.log("Can't access your location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}

function init() {
    loadCoords();
}
init();
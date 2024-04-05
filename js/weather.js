const API_KEY = "c9c9a3abed7b34ddca2b32459abb0c62";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("I can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

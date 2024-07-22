function displayInfo(response) {
  console.log(response);
  let cityElement = document.querySelector("#current-city");
  let currentTemperature = document.querySelector(".current-temperature-value");
  cityElement.innerHTML = response.data.city;
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let apiKey = "5aa9fb62d0a7bb52efo9b7105t3487b2";
  let url = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;
  axios.get(url).then(displayInfo);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

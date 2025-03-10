const year = document.querySelector("#year");
const lastModify = document.querySelector("#lastModify");

const today = new Date();
const theLastModify = document.lastModified;

const temperature = 25;
const windSpeed = 15;
const conditions = "Sunny";

year.innerHTML = `&copy${today.getFullYear()} | Kevin Andres Yanez | Ecuador`;
lastModify.innerHTML = `<span>Last Modification: ${theLastModify}</span>`;

function calculateWindChill(temp, wind) {
  const windChill = 13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16);

  return Math.round(windChill * 10) / 10;
}

function updateWeather() {
  const weatherSection = document.querySelector('.js');
  if (weatherSection) {
    const windChill = calculateWindChill(temperature, windSpeed);

    weatherSection.innerHTML = `
      <li>Temperature: ${temperature}°C</li>
      <li>Conditions: ${conditions}</li>
      <li>Wind: ${windSpeed} km/h</li>
      <li>Wind Chill: ${windChill}°C</li>
      `;
  }
}

updateWeather();
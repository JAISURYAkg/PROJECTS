const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "b5720b71962d1eae12ccbbbd859aa056";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  //  prevents the page reload

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please Enter a City");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  console.log(response);
}
function displayWeatherInfo(data) {}
function getWeatherEmoji(weatherId) {}
function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  //    what does the above thing do
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

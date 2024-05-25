const apikey = "e095904cfd08803eaec21e89730df270";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Define a variable for the selected city
let selectedCity;

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";

    if (data.main.pressure !== undefined) {
        document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
    } else {
        document.querySelector(".pressure").innerHTML = "Pressure data not available";
    }

    // Assign weather icon based on weather conditions
    if (data.weather && data.weather.length > 0) {
        const weatherMain = data.weather[0].main;

        if (weatherMain == "Clouds") {
            weatherIcon.src = "coursework-sem1ISA/images/clouds.png";
        } else if (weatherMain == "Clear") {
            weatherIcon.src = "coursework-sem1ISA/images/clear.png";
        } else if (weatherMain == "Rain") {
            weatherIcon.src = "coursework-sem1ISA/images/rain.png";
        } else if (weatherMain == "Drizzle") {
            weatherIcon.src = "coursework-sem1ISA/images/drizzle.png";
        } else if (weatherMain == "Mist") {
            weatherIcon.src = "coursework-sem1ISA/images/mist.png";
        }
    }
}

// Function to handle key press events
function handleKeyPress(event) {
    if (event.key === "Enter") {
        selectedCity = searchBox.value;
        checkWeather(selectedCity);
    }
}

// Add key press event listener to the search input
searchBox.addEventListener("keypress", handleKeyPress);

searchBtn.addEventListener("click", () => {
    selectedCity = searchBox.value;
    checkWeather(selectedCity);
});

// You might want to set a default city here or handle it differently based on your use case
// For now, I'll use "London" as the default city
selectedCity = "Udupi";
checkWeather(selectedCity);

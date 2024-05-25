/*   
   Name: Kenish Udash
   ID: 2408031 
*/

// Getting the API key and API URL from the OpenWeatherMap
const apiKey = "e095904cfd08803eaec21e89730df270";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting elements from the DOM
const searchbox = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

// Defining the variable for the selected city
let selectedCity;

// Function to check weather based on city input
async function checkWeather(city, country) {
    // Fetching weather data from the OpenWeatherMap API
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    
    // Adding a delay to simulate asynchronous behavior
    setTimeout(async () => {
        // Parsing the JSON response
        const data = await response.json();

        // Logging the fetched data for debugging
        console.log(data);

        // Updating the DOM elements with weather information
        document.querySelector(".city-country-name").innerHTML = data.name + "," + data.sys.country;
        document.querySelector(".current-temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity-info").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-info").innerHTML = data.wind.speed + " m/s";
        document.querySelector(".pressure-info").innerHTML = data.main.pressure + "mb";

        // Calculating local time and formatting it for display
        const timestamp = data.dt * 1000;
        const time = data.timezone;
        const localTime = new Date(timestamp + time * 1000);
        const localTimeString = new Intl.DateTimeFormat("en-US", {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'UTC',
        }).format(localTime);
        
        // Logging the formatted local time for debugging
        console.log(localTimeString);
        
        // Updating the DOM with the formatted local time
        document.querySelector(".current-date").innerHTML = localTimeString;

        // Assigning the weather condition based on the data.weather[0].main
        if (data.weather && data.weather.length > 0) {
            const weatherMain = data.weather[0].description;
            document.querySelector(".weather-condition").innerHTML = `${weatherMain}`;
            if (weatherMain == "overcast clouds") {
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1146/1146869.png";
            } else if (weatherMain == "clear sky") {
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/256/6974/6974833.png";
            } else if (weatherMain == "scattered clouds") {
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1959/1959321.png";
            } else if (weatherMain == "broken clouds") {
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/414/414927.png";
            } else if (weatherMain == "haze") {
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2930/2930095.png";
            }
            else if (weatherMain == "rain") {
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
            }
        }
    }, 1000);
}

// Function to handle keypress events in the search input
function handleKeyPress(event) {
    if (event.key === "Enter") {
        selectedCity = searchbox.value;
        checkWeather(selectedCity);
    }
}

// Adding keypress event listener to the search input
searchbox.addEventListener("keypress", handleKeyPress);

// Adding click event listener to the search button
searchbtn.addEventListener("click", () => {
    selectedCity = searchbox.value;
    checkWeather(selectedCity);
});

// Setting a default city (Udupi) and checking its weather on page load
selectedCity = "Udupi";
checkWeather(selectedCity);

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        // Display weather information
        const weatherOutput = `
            <h2>${city}</h2>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Condition:</strong> ${weatherDescription}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        `;
        
        document.getElementById("weather-output").innerHTML = weatherOutput;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data.");
    }
}

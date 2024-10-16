const apiKey = 'a8a1424a3b9d9b0fb2c88ab84ba4385e';
document.getElementById('searchBtn').addEventListener('click', getWeather);
function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').innerText = data.name;
                document.getElementById('temperature').innerText = `${data.main.temp}°C`;
                document.getElementById('description').innerText = data.weather[0].description;

                // Update weather icon
                const iconCode = data.weather[0].icon;
                document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

                // Update extra weather details
                document.getElementById('humidity').innerText = `${data.main.humidity}%`;
                document.getElementById('windSpeed').innerText = `${data.wind.speed} km/h`;
            } else {
                alert('City not found');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
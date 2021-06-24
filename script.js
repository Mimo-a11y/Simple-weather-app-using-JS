//global API key
let API_KEY ="8704a37bf9afb6305441678217933e49";

//function to get weather data
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => { 
    return response.json();
    });
}
//funtion to search for the city
searchCity = () => {
    var city = document.getElementById("weather").value;
    getWeatherData(city)
    .then((response) => {
    showWeatherData(response);
    console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}

//function to show weather data
showWeatherData = (weatherData) => { 
document.getElementById('weather').value = "";
 document.getElementById("cityName").innerText = weatherData.name;
 document.getElementById("main").innerText = weatherData.weather[0].main;
 document.getElementById("minTemp").innerText = weatherData.main.temp_max;
 document.getElementById("maxTemp").innerText = weatherData.main.temp_min;
 document.getElementById("temp").innerText = weatherData.main.temp;  
}



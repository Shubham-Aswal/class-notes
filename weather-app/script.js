// calling the api and fetching the weather data
async function fetchWeatherData(city = "pune") {
    const apiKey = `http://api.weatherapi.com/v1/current.json?key=bce16fecdad64a50a27182407262701&q=${city}&aqi=no`;

    const response = await fetch(apiKey);
    const data = await response.json();
    return data;
}


//selecting dom elements
let inputbox = document.querySelector("#intbx");
let cityslt = document.querySelector("h2");
let slct = document.querySelector("#submit");
let temp = document.querySelector("#temp");
let week = document.querySelector("week");
let wthr = document.querySelector("#wthr");

slct.addEventListener("click", async function () {
    var value = inputbox.value;
    cityslt.textContent = value;
    fetchWeatherData(value)
        .then(data => {
            console.log(data);
            wthr.textContent = data.current.condition.text;
            temp.textContent = data.current.temp_c+"°C";

           
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });


});














//adding event listeners







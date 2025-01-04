// Using "document.getElementById" property to ...

const temperature = document.getElementById("temperature");
const temperatureFeelsLike = document.getElementById("temperature_feels_like");
const windSpeed = document.getElementById("wind_speed");
const weatherDescription = document.getElementById("weather_description");  // Adding weather_description item

// The fuction apiTemperature is created to get weather vallues from API page
// Using "async" property to ...
async function apiTemperature() {

// Using "try" method to ...
    try{
        // Using "await" property to ...
        // Using "fecth" property to ...
        const response = await fetch("http://api.weatherunlocked.com/api/current/fi.65100?app_id=cb363626&app_key=5a70eb7b532cfced90229538b5e8fe8c");

        // Using ".ok" property to ...
        if(!response.ok){
            // Using "throw" method to ...
            // Using "Error" method to ...
            throw new Error("Could not fetch resource");
        }
        // Using "await" property to...
        // Using ".json()" method to ...
        const data = await response.json();

        // Using ".innerText" property to ...
        temperature.innerText = "Lämpötila: " + data.temp_c + "°C";
        temperatureFeelsLike.innerText = "Lämpötilan tunne: " + data.feelslike_c + "°C";
        windSpeed.innerText = "Tuulen nopeus: " + data.windspd_ms + " m/s";
        weatherDescription.innerText = "Sää: " + data.wx_desc;      // Adding weather_description item

        // Showing in the console all the information obtained from the APi web page
        console.log("Data from API:");
        console.log(data);

        // Showing in the console the values of ...
        console.log("Data taken to be shown in the webpage");
        console.log("Temperature: " + data.temp_c + "°C");
        console.log("Temperature feels like: " + data.feelslike_c + "°C");
        console.log("Wind speed: " + data.windspd_ms + " m/s");
        console.log("Sää: " + data.wx_desc);    // Adding weather_description item
       }
    // Using "catch(error)" method to ...
    // Using "error" property to ...
    catch(error){
        console.error(error);
    }  
}
// Calling the function to action
apiTemperature();
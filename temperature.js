/*1.- Creating variables with same name of their respective "html IDs".
  2.- Using ".getElementById" method to get the following "p" elements with the especific IDs from the html document. */

 // Tänään html elements:
	  
const temperatureCurrent = document.getElementById("temperatureCurrent");
const windSpeedCurrent = document.getElementById("windSpeedCurrent");
const weatherDescriptionCurrent = document.getElementById("weatherDescriptionCurrent");

// Huomenna html elements
    
const maxTemperatureForecast = document.getElementById("maxTemperatureForecast");
const minTemperatureForecast = document.getElementById("minTemperatureForecast");
const windSpeedForecast = document.getElementById("windSpeedForecast");

/* The fuction apiTemperature is created to get weather values from this API page: 
   https://developer.weatherunlocked.com/documentation/localweather/current  */

// Using "async" keyword to create the asynchronous function "apiTemperature"
async function apiTemperature() {

// Using "try" statement to define the code to be tested for errors

try{
/* 1.- Using "await" keyword to pause the execution of the asynchronus apiTemperature function.
   2.- Using "fecth" function to make a request to get data from the API webpage.
   3.- Using ".ok" function to check if the response was successful.
   4.- Maybe the fetching process succed, but for some reason the data is not available, then, the "!response.ok" will be "true".
       4.1.- Using  the "throw" keyword to define a "new error" that can occur when getting the "true" value.
   5.- Using the "await" keyword to make a pause for the ".jason" method to deliver all the data before executing the next line conde.
   6.- Using ".json()" method to parse the response fetched from the API page as a javascript object or array.    */
        
// For Tänään data.
    const responseCurrent = await fetch("http://api.weatherunlocked.com/api/current/fi.65100?app_id=cb363626&app_key=5a70eb7b532cfced90229538b5e8fe8c");
// For Huomenna data.
    const responseForecast = await fetch("http://api.weatherunlocked.com/api/forecast/fi.65100?app_id=cb363626&app_key=5a70eb7b532cfced90229538b5e8fe8c");

    if(!responseCurrent.ok){    // For Tännän data.
        throw new Error("Could not fetch resource");
    }
    const dataCurrent = await responseCurrent.json();
 
    if(!responseForecast.ok){       // For Huomenna data.
        throw new Error("Could not fetch resource");
    }
    const dataForecast = await responseForecast.json();

// Using the ".innerText" property to update the chosen "p" elements text. This variables are receiving the data parsed by ".json" method.  
    // For Tänään data.
    temperatureCurrent.innerText = "Lämpötila: " + dataCurrent.temp_c + "°C";   
	windSpeedCurrent.innerText = "Tuulen Nopeus: " + dataCurrent.windspd_ms + "°C"; 
	weatherDescriptionCurrent.innerText = "Sääkuvaus: " + dataCurrent.wx_desc; 
    // For Huomenna data.
    maxTemperatureForecast.innerText = "Ylin Lämpötila: " + dataForecast.Days[1].temp_max_c + "°C";   
    minTemperatureForecast.innerText = "Alin Lämpötila: " + dataForecast.Days[1].temp_min_c + "°C";   
    windSpeedForecast.innerText = "Tuulen maksiminopeus: " + dataForecast.Days[1].windspd_max_ms + " m/s";    
 
// Showing in the console: Current data from APi web page.
    console.log("");
    console.log("Current Data from API:");
    console.log(dataCurrent);

    console.log("Current Temperature: " + dataCurrent.temp_c + "°C");
    console.log("Wind speed: " + dataCurrent.windspd_ms + " m/s");
    console.log("Sää: " + dataCurrent.wx_desc);  

// Showing in the console: Forecast data from APi web page.
    console.log("");
    console.log("Forecast Data from API:");
    console.log(dataForecast);

    console.log("Temperature: " + dataForecast.Days[1].temp_max_c + "°C");
    console.log("Temperature: " + dataForecast.Days[1].temp_min_c + "°C");
    console.log("Wind speed: " + dataForecast.Days[1].windspd_max_ms + " m/s");
    }
/*  
1.-Using "catch(error)" statement to define a block of code to be executed if an error occurs in the try block.
2.-Using "error" method to write an error message to the console.
3.- This catch(error) will tell us if there was an error while trying to reach the API webpage.
*/
    catch(error){
        //Showing the "error" in the console.
        console.error(error);
    }  
}
// Calling the function to action
apiTemperature();
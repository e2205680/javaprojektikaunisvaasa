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
   https://www.meteosource.com/documentation  */

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
        
    	
	const url =	"https://www.meteosource.com/api/v1/free/point?place_id=vaasa&sections=all&timezone=Europe%2FHelsinki&language=en&units=metric&key=3rl4svnm9oxpxxlgsdywtkqy6lec7dojyuu80ear";
	
    const response = await fetch(url);

    if(!response.ok){    
        throw new Error("Could not fetch resource");
    }
    const data = await response.json();  

// Using the ".innerText" property to update the chosen "p" elements text. This variables are receiving the data parsed by ".json" method.  
    // For Tänään data.
    temperatureCurrent.innerText = "Lämpötila: " + data.current.temperature + "°C";   
	windSpeedCurrent.innerText = "Tuulen Nopeus: " + data.current.wind.speed + "m/s"; 
	weatherDescriptionCurrent.innerText = "Sääkuvaus: " + data.daily.data[0].all_day.weather; 
    // For Huomenna data.
    maxTemperatureForecast.innerText = "Ylin Lämpötila: " + data.daily.data[1].all_day.temperature_max + "°C";   
    minTemperatureForecast.innerText = "Alin Lämpötila: " + data.daily.data[1].all_day.temperature_min + "°C";   
    windSpeedForecast.innerText = "Tuulen Nopeus: " + data.daily.data[1].all_day.wind.speed + " m/s";    
 
// Showing in the console: Current data from APi web page.
    console.log("");
    console.log("Current Data from API:");
    console.log(data);

    console.log("Current Temperature: " + data.current.temperature + "°C");
    console.log("Wind speed: " + data.current.wind.speed + " m/s");
    console.log("Sää: " + data.daily.data[0].all_day.weather);  

// Showing in the console: Tomorrow data from APi web page.
    console.log("");
    console.log("Tomorrow Data from API:");

    console.log("Max Temperature: " + data.daily.data[1].all_day.temperature_max + "°C");
    console.log("Min Temperature: " + data.daily.data[1].all_day.temperature_min + "°C");
    console.log("Wind speed: " + data.daily.data[1].all_day.wind.speed + " m/s");
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
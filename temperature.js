/* Using ".getElementById" method to get the following "p" elements with
   the especific IDs from the html document. */

const temperature = document.getElementById("temperature");
const temperatureFeelsLike = document.getElementById("temperature_feels_like");
const windSpeed = document.getElementById("wind_speed");
const weatherDescription = document.getElementById("weather_description");  // Adding weather_description item

/* The fuction apiTemperature is created to get weather values 
   from an API page: 
   https://developer.weatherunlocked.com/documentation/localweather/current  */

// Using "async" keyword to create the asynchronous function "apiTemperature"
async function apiTemperature() {

// Using "try" statement to define the code to be tested for errors
    try{
/* 1.- Using "await" keyword to pause the execution of the asynchronus apiTemperature function.
   2.-Using "fecth" function to make a request to get data from the API webpage     */
        const response = await fetch("http://api.weatherunlocked.com/api/current/fi.65100?app_id=cb363626&app_key=5a70eb7b532cfced90229538b5e8fe8c");

/* 1-. Using ".ok" function to check if the response was successful.
   2-. It can happen that there was no error in the fetching proces, 
       but the information we expect may not be available inside the API webpage, 
       in that case the "!response.ok" will be "true"  */

        if(!response.ok){

        /*  Using  the "throw" keyword to define a "new error"
            that can occur due the syntaxis of the own code.  */
            throw new Error("Could not fetch resource");
        }
/* 1.-  Using the "await" keyword to make a pause 
        (to wait) for the ".jason" method to deliver all the data before
        executing the next line conde.
   2.-  Using ".json()" method to parse (converting) the response fetched 
        from the API page as a javascript object or array.       */
        const data = await response.json();

    /*  Using the ".innerText" property to update the values 
        of the element "p" texts that has been chosen.
        This variables are receiving the data parsed by "".json" method      */
        temperature.innerText = "Lämpötila: " + data.temp_c + "°C";
        temperatureFeelsLike.innerText = "Lämpötilan tunne: " + data.feelslike_c + "°C";
        windSpeed.innerText = "Tuulen nopeus: " + data.windspd_ms + " m/s";
        weatherDescription.innerText = "Sää: " + data.wx_desc;      // Adding weather_description item

    // Showing in the console all the information obtained from the APi web page
        console.log("Data from API:");
        console.log(data);

    // Showing in the console the values of the selected data from the API webpage
        console.log("Data taken to be shown in the webpage");
        console.log("Temperature: " + data.temp_c + "°C");
        console.log("Temperature feels like: " + data.feelslike_c + "°C");
        console.log("Wind speed: " + data.windspd_ms + " m/s");
        console.log("Sää: " + data.wx_desc);    // Adding weather_description item
       }
/*  1.-Using "catch(error)" statement to define a block of code to 
       be executed if an error occurs in the try block.
    2.-Using "error" method to write an error message to the console
    3.- This catch(error) will tell us if there was an error while trying
        to reach the API webpage */
    catch(error){
        //Showing the "error" in the console.
        console.error(error);
    }  
}
// Calling the function to action
apiTemperature();
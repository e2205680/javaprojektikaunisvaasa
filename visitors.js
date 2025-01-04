/* Using ".getElementById" method to get 
   the element with ID = "count" from the html document.     */
const count = document.getElementById("count");

// Calling the function "countingYourVisits" .
countingYourVisits();

/* Creating function "countingYourVisits" to count how many times 
   the user has visited the Vasa valokuva - Albumi webpage.  */
function countingYourVisits(){

/* Creating variable "vierailu" */
let vierailu;

/*  Using "localStorage.getItem" method to get 
    data stored in the" browser´s localStorage object "vierailu" */
if(!localStorage.getItem("vierailu")) {

    /* Using "localStorage.setItem" method to store
    data in the browser's localStorage object "vierailu"  */
    localStorage.setItem("vierailu", 1);

/*  How it works:
1.- The value of item "vierailu" does not exist.
    Therefore: "!localStorage.getItem("vierailu") = true
2.- Using the If statement: 
    Condition: If "!localStorage.getItem("vierailu") is true 
    then: A string value is settle: "vierailu" = 1 
          using localStorage.setItem. */
}  

else {
// Using "+localStorage.getItem" to convert in number the value obtained from the webpage
/* In case the value of "vierailu" exist on the webpage, 
( only after the first visit)
then the gotten value change from string to integer.  */

vierailu = +localStorage.getItem("vierailu");
// Then, for the 2nd visit: "vierailu" = 1 (numeric value)

/* A variable "countingVisits" is created (In the 2nd visit)
and will receive the new value of "vierailu" increased in 1 */
const countingVisits = vierailu + 1;
// Then: "countingVisits" = 1 + 1 = 2

/* Using "localStorage.setItem" method to give the new value
of "countingVisits to "vierailu", then  at 2nd visit
the new value of vierailu = 2    */
localStorage.setItem("vierailu", countingVisits);

// Showing the value of "countingVisits"
console.log("Tämä on vierailusi numero: " + countingVisits);
}

// Using the ".innerText" property to update the value of the element "count"
// At 2nd visit "vierailu" has been updated to value = 2
count.innerText = localStorage.getItem("vierailu");

/*  In 1st visit, count = 1
    In 2nd visit, count = 2 , and so on */
}


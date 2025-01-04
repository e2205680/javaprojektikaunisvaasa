// Showing in the console the title of the proyect 
console.log("Kaunis Vaasa - Finland"); 

//Using ".getElementById" method to get the following buttons from the html document.
const buttonEdellinen = document.getElementById("buttonEdellinen");
const buttonSeurava = document.getElementById("buttonSeurava");

/* Using the ".addEventListener" method to execute 
   the "muutaKuvaSound" function when you click on the specific button. */
buttonEdellinen.addEventListener("click", muutaKuvaSound);
buttonSeurava.addEventListener("click", muutaKuvaSound);

/* Using the "addEventListener" method to execute
   the "nappiEdellinenKuva" function when you click on the specific button */
buttonEdellinen.addEventListener("click", nappiEdellinenKuva);
buttonSeurava.addEventListener("click", nappiSeuravaaKuva);

// Using ".getElementById" method to get the image with id="kuva0".
let pic = document.getElementById("kuva0");

// Creating an empty Array "kuvat" to place the names of the pictures (21 pictures)
let kuvat = [];

/* 
1.- Using "for loop" statement to iterate from 0 
    to a number lower than 21 (total amount of pictures available).
2.- The "for loop" statement let me write the names of the pictures in an automatic way 
    when the names have a consecutive numeration. 
3.- Creating the "index" variable to keep the index values of each iteration.  
  */
for (let index = 0; index <21; index++) {

    /* 
    Using the ".push" method to add the names 
    created for of each picture in the Array "kuvat". 
    */
    kuvat.push("img_"+index+".jpg");
}
// Showing values of Array "kuvat" in the console
console.log("Array of kuvat names:");
console.log(kuvat);

// Using ".length" property to count the elements in the Array "kuvat".
let kuvatLength = kuvat.length;

// Creating variable "numero" as index to Array "kuvat". 
let numero = 0; 

// Creating "katsoKuva" function to show the picture in the webpage according to the index.
function katsoKuva(){
    // Showing in the console the name of the kuva with the index "numero"
    console.log(kuvat[numero]);

    /* Using the ".src" property to replace the element 
    of id = "kuva0" in the Album (img_0)
    with the new picture "kuvat" of index "numero".  */
    pic.src = kuvat[numero];
}

// Creating "nappiSeuravaaKuva" function to go forward in the Album.
function nappiSeuravaaKuva() {

    // Increasing by 1 the value of the index "numero".
    numero = numero +  1;
    /* Using If statement:
    Condition: If the index "numero" is equal or more than the amount 
               of elements "kuvaLength", then
               the index "numero" receives the numerical value: 0 .
     */
    if(numero >= kuvatLength) {
        numero = 0;  
    }
    // Calling function "katsoKuva" to update the picture with the new index.
    katsoKuva();
}

// Creating "nappiEdellinenKuva" function to go back in the Album.
function nappiEdellinenKuva() {

    // Decreasing by 1 the value of the index "numero".
    numero = numero - 1;
    /* Using If statement:
    Condition: If the index "numero" is less than the amount 
               of elements "kuvaLenght", then
               the index "numero" receives the numerical value
               of kuvaLength minus 1
     */
    if(numero < 0) {
        numero = kuvatLength - 1;  
    }    
    // Calling function "katsoKuva" to update the picture with the new index.
    katsoKuva();   
}
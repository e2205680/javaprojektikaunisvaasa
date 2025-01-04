// Showing in the console the title of the proyect 
console.log("Kaunis Vaasa - Finland"); 

//Using "document.getElementById" property to ...
const buttonEdellinen = document.getElementById("buttonEdellinen");
const buttonSeurava = document.getElementById("buttonSeurava");

// Using the "addEventListener" property to ...
buttonEdellinen.addEventListener("click", muutaKuvaSound);
buttonSeurava.addEventListener("click", muutaKuvaSound);

// Using the "addEventListener" property to ...
buttonEdellinen.addEventListener("click", nappiEdellinenKuva);
buttonSeurava.addEventListener("click", nappiSeuravaaKuva);

// Using "document.getElementById" property to ...
let pic = document.getElementById("kuva0");

//Creating Array "kuvat" to ...
let kuvat = [];
//Using "for loop" to ...
for (let index = 0; index <21; index++) {
    // Using "push" method to ...
    kuvat.push("img_"+index+".jpg");
}
// Showing values of Array "kuvat" in the console
console.log("Array of kuvat names:");
console.log(kuvat);

// Using ".length" property to ...
let kuvatLength = kuvat.length;
// Creating the index "numero"
let numero = 0; 

// Creating "katsoKuva" function to ...
function katsoKuva(){
    // Showing in the console the name of the kuva with the index "numero"
    console.log(kuvat[numero]);
    // Using ".src" property to ...
    pic.src = kuvat[numero];
}

// Creating "nappiSeuravaaKuva" function to ...
function nappiSeuravaaKuva() {
    // Incrementing by 1 the value of the index "numero"
    numero = numero +  1;
    /*
    Condition: If the index "numero" is equal or more than the amount 
               of elements "kuvaLength",
               the index "numero" receives the numerical value: 0
     */
    if(numero >= kuvatLength) {
        numero = 0;  
    }
    // Calling function "katsoKuva"
    katsoKuva();
}

// Creating "nappiEdellinenKuva" function to ...
function nappiEdellinenKuva() {
    // Decrementing by 1 the value of the index "numero"
    numero = numero - 1;
    /*
    Condition: If the index "numero" is less than the amount 
               of elements "kuvaLenght",
               the index "numero" receives the numerical value
               of kuvaLength minus 1
     */
    if(numero < 0) {
        numero = kuvatLength - 1;  
    }    
    // Calling function "katsoKuva"
    katsoKuva();
    

}
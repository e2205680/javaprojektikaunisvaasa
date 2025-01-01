console.log("Kaunis Vaasa - Finland");

const buttonEdellinen = document.getElementById("buttonEdellinen");
const buttonSeurava = document.getElementById("buttonSeurava");

let pic = document.getElementById("kuva0");

let kuvat = [];
for (let index = 0; index <21; index++) {
    
    kuvat.push("img_"+index+".jpg");
}

console.log("Array of kuvat names:");
console.log(kuvat);

let kuvatLength = kuvat.length;
let numero = 0; 

buttonEdellinen.addEventListener("click", nappiEdellinenKuva);
buttonSeurava.addEventListener("click", nappiSeuravaaKuva);

// Aktivoi muutaKuvaSound

buttonEdellinen.addEventListener("click", muutaKuvaSound);
buttonSeurava.addEventListener("click", muutaKuvaSound);

// END of Aktivoi muutaKuvaSound

// Adding katsoKuva function

function katsoKuva(){
    
    console.log(kuvat[numero]);
    pic.src = kuvat[numero];
}
// END of Adding KatsoKuva function

function nappiSeuravaaKuva() {

    numero = numero +  1;
  
    if(numero >= kuvatLength) {
        numero = 0;  
    }
    katsoKuva();
}

// Adding second button Edellinen function

function nappiEdellinenKuva() {
    
    numero = numero - 1;

    if(numero < 0) {
        numero = kuvatLength - 1;  
    }    
    katsoKuva();
    
// END of Adding second button Edellinen function
}
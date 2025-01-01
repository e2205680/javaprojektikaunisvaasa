console.log("Kaunis Vaasa - Finland");

const buttonEdellinen = document.getElementById("buttonEdellinen");
const buttonSeurava = document.getElementById("buttonSeurava");

let pic = document.getElementById("kuva0");

let kuvat = [];
for (let index = 0; index <21; index++) {
    //kuvat[index] = "img_"+index+".jpg";
    kuvat.push("img_"+index+".jpg");
}

console.log("Array of kuvat names:");
console.log(kuvat);

let kuvatLength = kuvat.length;
let numero = 1;

buttonEdellinen.addEventListener("click", nappiEdellinenKuva);
buttonSeurava.addEventListener("click", nappiSeuravaaKuva);

function katsoKuva(){
    
    console.log(kuvat[numero]);

    pic.src = kuvat[numero];
}

function nappiSeuravaaKuva() {

    katsoKuva();
    
    numero = numero +  1;

    if(numero == kuvatLength) {
        numero = 0;  
    }
}

// Adding second button Edellinen

function nappiEdellinenKuva() {
    
    numero = numero - 1;

    katsoKuva();

    if(numero <= 0) {
        numero = kuvatLength;  
    }
    
    
// END of Adding second button

}



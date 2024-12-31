console.log("Kaunis Vaasa - Finland");

const buttonEdellinen = document.getElementById("buttonEdellinen");
const buttonSeurava = document.getElementById("buttonSeurava");

let pic = document.getElementById("kuva0");

let kuvat = [];
for (let index = 0; index <21; index++) {
    kuvat[index] = "img_"+index+".jpg";
}

console.log("Array of kuvat names:");
console.log(kuvat);

let kuvatLength = kuvat.length;
let numero=1;

buttonEdellinen.addEventListener("click", nappiEdellinenKuva);
buttonSeurava.addEventListener("click", nappiSeuravaaKuva);

function nappiSeuravaaKuva() {

    
    console.log(kuvat[numero]);
    pic.src = kuvat[numero];
    numero=numero+1;
    if(numero==kuvatLength) {
        numero=0;  
    }
}

// Adding second button

function nappiEdellinenKuva() {

    let toinennum = numero-2;
    console.log(kuvat[toinennum]);
    pic.src = kuvat[toinennum];

    toinennum=toinennum-1;
    if(toinennum<1) {
        toinennum=0;  
    }
    
// END of Adding second button

}




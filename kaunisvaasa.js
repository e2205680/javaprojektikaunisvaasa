console.log("Kaunis Vaasa - Finland");

let pic = document.getElementById("kuva0");

let kuvat = [];
for (let index = 0; index <21; index++) {
    kuvat[index] = "img_"+index+".jpg";
}

console.log("Array of kuvat names:");
console.log(kuvat);

let kuvatLength = kuvat.length;
let numero=1;

function omaFunktio() {

    console.log(kuvat[numero]);
    pic.src = kuvat[numero];
    
    numero=numero+1;
    if(numero==kuvatLength) {
        numero=0;  
    }
}




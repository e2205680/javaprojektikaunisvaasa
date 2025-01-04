// Using "window.onload" property to ...
window.onload = aloittaa;

// Käyttämällä kuvat array - from kaunisvaasa.js 

// Using "document.getElementById" property to ...
const buttonLevelEasy = document.getElementById("easy");
const buttonLevelMedium = document.getElementById("medium");
const buttonLevelHard = document.getElementById("hard");

// Using ".addEventListener" property to ...
buttonLevelEasy.addEventListener("click", painaNappiSound);
buttonLevelMedium.addEventListener("click", painaNappiSound);
buttonLevelHard.addEventListener("click", painaNappiSound);

// Using "document.getElementsByClassName" property to ...
const ikkunaLaskuri = document.getElementsByClassName("ikkuna");
const imagenLaskuri = document.getElementsByClassName("imagen");

// viesti jokaiselle kuvalle - yhteensä 21 viestiä

/*
Creating the Array "palkinot" which elements are the messages
that the user will get as prize when makes a match of 3 pictures
*/
let palkinnot =[
    "Unelmat eivät ole liian suuria, ne vain odottavat, että rohkeutesi kasvaa tarpeeksi tavoittaaksesi ne",
    "Jokainen päivä on uusi mahdollisuus aloittaa alusta ja kirjoittaa oma tarinasi.",
    "Pienet askeleet vievät pidemmälle kuin suuri liikkumattomuus.",
    "Ole ylpeä siitä, kuka olet tänään, sillä olet kulkenut pitkän matkan tullaksesi tähän pisteeseen.",
    "Kun tartut hetkeen, maailma avautuu uusille mahdollisuuksille.",
    "Et ole yksin – jokainen taistelu tekee sinusta vahvemman.",
    "Älä pelkää epäonnistumista; se on askel kohti menestystä.",
    "Keskity siihen, mitä voit hallita, ja anna muun virrata omalla painollaan.",
    "Sinun ei tarvitse olla täydellinen ollaksesi arvokas ja rakastettu.",
    "Ole valo, joka valaisee muidenkin tietä.",
    "Usko itseesi – sinussa on enemmän voimaa kuin ymmärrät.",
    "Kasvu alkaa epämukavuusalueelta. Astu rohkeasti uuteen.",
    "Yksi ystävällinen sana voi muuttaa jonkun päivän – tai elämän.",
    "Ole tänään se henkilö, jollaiseksi haluat tulla huomenna.",
    "Rohkeus ei ole pelon puutetta, vaan sen kohtaamista ja eteenpäin kulkemista.",
    "Kauneus on siinä, että uskallat olla oma itsesi.",
    "Kun suljet yhden oven, muista katsoa ympärillesi – ehkä toinen on jo auki.",
    "Älä vertaa itseäsi muihin; sinun matkasi on ainutlaatuinen.",
    "Anna anteeksi itsellesi virheistä, sillä ne opettavat sinulle arvokkaimpia oppitunteja.",
    "Sinä olet arvokas, tärkeä ja juuri oikeanlainen.",
    "Kaikki mitä tarvitset, on jo sisälläsi – odottamassa, että vapautat sen."
]; 

// Creating "aloittaa" function to ..
function aloittaa(){   

    // Using ".addEventListener" property to ...
    buttonLevelEasy.addEventListener("click", painaNappi); 
    buttonLevelMedium.addEventListener("click", painaNappi);
    buttonLevelHard.addEventListener("click", painaNappi);      
}

// Creating "paikka" variable to ...
let paikka;

// Creating "painaNappi" function to ...
function painaNappi(){

    // Giving to "paikka" the value of an empty Array
    paikka=[];

    // Using ".length" property to ...
    let luku = ikkunaLaskuri.length;

    // Using "for loop" to ...
    // Creating the index "arvo"
    for (let arvo=0; arvo<luku; arvo++){

        /*Calling the "valitseKuva" function 
        inside the push method
        */
        // Using the ".push" method to ...
        paikka.push(valitseKuva());
        // Calling "laittaKuva" function to ...
        laittaaKuva(arvo,paikka[arvo]);
    }
    // Showing the Array "paikka" in the console
    console.log(paikka);

    // Calling function "vertailla" to ...
    vertailla();
}

// Adding code for the 3 buttons of gameLevel

    // Creating variable "kerroin" to ...
    let kerroin;

    // Using ".addEventListener" property to ...
    buttonLevelEasy.addEventListener("click", () => {
        kerroin = 3; 
    }); 
    // Using ".addEventListener" property to ...
    buttonLevelMedium.addEventListener("click", () => {
        kerroin = 10; 
    });
    // Using ".addEventListener" property to ...
    buttonLevelHard.addEventListener("click", () => {
        kerroin = kuvat.length; 
    }); 
// END of Adding code for the 3 buttons of gameLevel

// Creating function "valitseKuva" to ...
function valitseKuva(){

    /* 
    1.- Using "Math.random" method to create a random number
    that will be multiplied by the "kerroin" value.
    2.- Using "Math.floor" method to round the 
    decimal number to the lower integer.  */
  
    let kuvaNumero=Math.floor(Math.random() * kerroin);
    // Showing the "kerroin" value in the console
    console.log("kerroin: "+kerroin);
    // Using "return" method to ...
    return kuvaNumero;
}

// Creating function "laittaKuva" to ...
function laittaaKuva(vuoro,indexLuku){

    imagenLaskuri[vuoro].getElementsByTagName("img")[0].src=kuvat[indexLuku]; 
}

function vertailla(){

   const mensaje = document.getElementById("mensaje");

   if(paikka[0]==paikka[1] && paikka[1]==paikka[2]){
                
        mensaje.innerText = palkinnot[paikka[0]];
        console.log("Voittoviesti: "+paikka[0]);

        // Calling the function "soundVoittaja"
        soundVoittaja(); 
   }
}

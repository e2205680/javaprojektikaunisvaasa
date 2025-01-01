window.onload = aloittaa;

// Käyttämällä kuvat array - from kaunisvaasa.js tiedosto

const buttonLevelEasy = document.getElementById("easy");
const buttonLevelMedium = document.getElementById("medium");
const buttonLevelHard = document.getElementById("hard");

const ikkunaLaskuri = document.getElementsByClassName("ikkuna");
const imagenLaskuri = document.getElementsByClassName("imagen");

// viesti jokaiselle kuvalle - yhteensä 21 viestiä
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

let paikka=[];


function aloittaa(){

    buttonLevelEasy.addEventListener("click", painaNappi); 
    buttonLevelMedium.addEventListener("click", painaNappi);
    buttonLevelHard.addEventListener("click", painaNappi);   

    // Aktivoi painaNappiSound function
    buttonLevelEasy.addEventListener("click", painaNappiSound);
    buttonLevelMedium.addEventListener("click", painaNappiSound);
    buttonLevelHard.addEventListener("click", painaNappiSound);
    
}

function painaNappi(){

    paikka=[];

    let luku = ikkunaLaskuri.length;

    for (let arvo=0; arvo<luku; arvo++){

        paikka.push(valitseKuva());
        laittaaKuva(arvo,paikka[arvo]);
    }
    console.log(paikka);

    vertailla();
}

// Adding code for the 3 buttons of gameLevel

    let kerroin;

    buttonLevelEasy.addEventListener("click", () => {
        kerroin = 3; 
        console.log("kerroin: "+kerroin);
    }); 
    buttonLevelMedium.addEventListener("click", () => {
        kerroin = 10; 
        console.log("kerroin: "+kerroin);
    });
    buttonLevelHard.addEventListener("click", () => {
        kerroin = kuvat.length; 
        console.log("kerroin: "+kerroin);
    }); 

    
// END of Adding code for the 3 buttons of gameLevel

function valitseKuva(){

    let kuvaNumero=Math.floor(Math.random() * kerroin);  
    return kuvaNumero;
}

function laittaaKuva(vuoro,indexLuku){

    imagenLaskuri[vuoro].getElementsByTagName("img")[0].src=kuvat[indexLuku]; 
}

function vertailla(){

   const mensaje = document.getElementById("mensaje");

   if(paikka[0]==paikka[1] && paikka[1]==paikka[2]){
                
        mensaje.innerText = palkinnot[paikka[0]];
        console.log("Voittoviesti: "+paikka[0]);

        soundVoittaja();  // Aktivoi soundVoittaja function
   }
}

window.onload = aloittaa;

// Käyttämällä kuvat array - from kaunisvaasa.js tiedosto

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

    document.getElementById("easy").addEventListener("click", painaNappi); 
    document.getElementById("medium").addEventListener("click", painaNappi);
    document.getElementById("hard").addEventListener("click", painaNappi);   
    
}

function painaNappi(){

    paikka=[];

    let maximo = document.getElementsByClassName("ikkuna").length;

    for (let k=0;k<maximo;k++){

        paikka.push(valitseKuva());
        näytäKuva(k,paikka[k]);
    }
    console.log(paikka);

    vertailla();
}

// Adding code for the 3 buttons of gameLevel

    let multiplier;

    document.getElementById("easy").addEventListener("click", () => {
        multiplier = 3; 
        console.log("multiplier: "+multiplier);
    }); 
    document.getElementById("medium").addEventListener("click", () => {
        multiplier = 10; 
        console.log("multiplier: "+multiplier);
    });
    document.getElementById("hard").addEventListener("click", () => {
        multiplier = kuvat.length; 
        console.log("multiplier: "+multiplier);
    }); 

    document.getElementsByClassName("gameLevel").addEventListener("click", playGameLevel())

// END of Adding code for the 3 buttons of gameLevel

function valitseKuva(){

    let kuvaIndex=Math.floor(Math.random() * multiplier);  
    return kuvaIndex;
}

function näytäKuva(num,im){

    document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src=kuvat[im]; 
}

function vertailla(){

   const mensaje = document.getElementById("mensaje");

   if(paikka[0]==paikka[1] && paikka[1]==paikka[2]){
                
        mensaje.innerText = palkinnot[paikka[0]];
        console.log("Voittoviesti: "+paikka[0]);

        soundVoittaja();  // Aktivoi audioVoittaja
   }
}


function soundVoittaja(){
    let audioVoittaja = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3");
    audioVoittaja.play();     
}

function playGameLevel(){
    let audioGameLevel = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");
    audioGameLevel.playGameLevel();   
}
/* Using "window.onload" property to load the webpage
   before executing any function.  */

/* The  "window.onload = aloittaa" means that the function "aloitta"
   will be executed after the webpage has been loaded. */
window.onload = aloittaa; 

// Käyttämällä kuvat array "from kaunisvaasa.js" file.

/* Using "document.getElementById" method to get 
   the following buttons from the html document. */
const buttonLevelEasy = document.getElementById("easy");
const buttonLevelMedium = document.getElementById("medium");
const buttonLevelHard = document.getElementById("hard");

/* Using the ".addEventListener" method to execute 
   the "painaNappiSound" function when you click on the specific button.  */
buttonLevelEasy.addEventListener("click", painaNappiSound);
buttonLevelMedium.addEventListener("click", painaNappiSound);
buttonLevelHard.addEventListener("click", painaNappiSound);

/* Using "document.getElementsByClassName" method 
   to get the elements with the tag "ikkuna" and "imagen"  */
const ikkunaLaskuri = document.getElementsByClassName("ikkuna");
const imagenLaskuri = document.getElementsByClassName("imagen");

// Viesti jokaiselle kuvalle - yhteensä 21 viestiä.

/* Creating the Array "palkinot" which elements are the messages
   that the user will get as award when makes a match of 3 pictures.  */
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

// Creating "aloittaa" function to set up event listeners to the specific buttons.
function aloittaa(){   

    /* Using the ".addEventListener" method to execute 
       the "painaNappi" function when you click on the specific button. */
    buttonLevelEasy.addEventListener("click", painaNappi); 
    buttonLevelMedium.addEventListener("click", painaNappi);
    buttonLevelHard.addEventListener("click", painaNappi);      
}

// Creating "paikka" variable where will be the images (3 images) for game Pelikone.
let paikka;

/* Creating "painaNappi" function to settle which picture
   and in what place (ikkuna) will be shown the pictures. */ 
function painaNappi(){

    // Giving to "paikka" the value of an empty Array.
    paikka=[];

/*  1.- Using ".length" property to count the elements with class name "ikkuna".
    2.- Creating variable "luku" to keep the value of "ikkunaLaskuri.length".  */
    let luku = ikkunaLaskuri.length; // ikkunaLaskuri.length = 3..

    /* Using "for loop" statemet to iterate from 0 to an integer lower than "luku" value.
       Creating the index "arvo" to keep the counting in the iteration. */
    for (let arvo=0; arvo<luku; arvo++){

        // Calling the "valitseKuva" function inside the push method.
        
        /* Using the ".push" method to add the numerical values, provided
           by "valitseKuva function" (21 values max) to the Array "paikka". */
        paikka.push(valitseKuva());
        /* Calling "laittaKuva" function to show the image from the Array "kuvat"
           that was created in the file "kaunisvaasa.js". */
        laittaaKuva(arvo,paikka[arvo]);

    /* How it works: 
    1.- The "for loop" makes that in each "arvo" value, 
    functions valitseKuva and laittaKuva are called, example: arvo = 2
    2.- valitseKuva() returns a number between 0 and 21,
    depending of the level choosen, example:  8 when chose level medium (button 2).
    3.- laittaKuva() requires 2 parameters, example: arvo = 2; paikka[2] = 8 ,
    It means that picture "img_8.jpg" will be placed in the ikkuna "2".  */
    }
    
    // Showing the Array "paikka" in the console
    console.log(paikka);

    /* Calling function "vertailla" to select the message 
       when the user make a match of 3 pictures. */
    vertailla();
}

// Adding code for the 3 buttons of gameLevel

    /* Creating variable "kerroin" to multiply a decimal random number.
    The value will depend on which level of game the user might choose.  */
    let kerroin;

    /* Using the ".addEventListener" method to execute the function 
       that gives the value of "3" to variable "kerroin" 
       when clicking on "easy level" button (round button "1" in the webpage).  */
    buttonLevelEasy.addEventListener("click", () => {
        kerroin = 3; // 3 random pictures will be choosen from 4 alternatives.
    }); 
    /* Using the ".addEventListener" method to execute the function 
        that gives the value of "10" to variable "kerroin" 
        when clicking on "medium level" button (round button "2" in the webpage).  */
    buttonLevelMedium.addEventListener("click", () => {
        kerroin = 10; // 3 random pictures will be choosen from 10 alternatives.
    });

    /* Using the ".addEventListener" method to execute the function 
       that gives the value of "kuvat.length" (21) to variable "kerroin" 
       when clicking on "hard level" button (round button "3" in the webpage).  */
    buttonLevelHard.addEventListener("click", () => {
        kerroin = kuvat.length; // 3 random pictures will be choosen from 21 alternatives.
    }); 
// END of Adding code for the 3 buttons of gameLevel.

//Creating function "valitseKuva" to decide which picture will be shown.
function valitseKuva(){

/*  1.- Using "Math.random" method to create a random decimal number
    that will be multiplied by the "kerroin" value.
    2.- Using "Math.floor" method to round the 
    decimal number to the lower integer.  */
    let kuvaNumero=Math.floor(Math.random() * kerroin);
    
    // Showing the "kerroin" value in the console.
    console.log("kerroin: "+kerroin);
    
    /* Using the "return" statement to specify the value
       of "kuvaNumero" that will be provided by the function. */
    return kuvaNumero;
}

/* Creating function "laittaKuva" that use 2 parameters,
   to show a picture from Array kuvat (created in kaunisvaasa.js file). */
function laittaaKuva(vuoro,indexLuku){

    imagenLaskuri[vuoro].getElementsByTagName("img")[0].src=kuvat[indexLuku]; 
    /* How it works:
    1.- Parameter "vuoro" is the index, that tells 
        which ikkuna will contain the chosen picture.
    2.- Using ".getElementsByTagName" method to manage 
        the element of the "ikkuna" which has the tag "img".
    3.- Using the ".src" property to replace the image in the ikkuna (img_0) 
        with the new picture "kuvat" of index "indexLuku".    */
}
/* Creating function "vertailla" to choose which message 
   will be disply in the message box. */
function vertailla(){

    //Using ".getElementById" method to get the "message" element the html document.
   const mensaje = document.getElementById("mensaje");

   // Using If statetment:
   /* Condition: If the 3 elements (paikka[0], paikka[1], paikka[2]) are equals, 
      then a "message" is release as an award. */
   if(paikka[0]==paikka[1] && paikka[1]==paikka[2]){

        /* Using ".innerText" property to update 
           the "message" inside the message box "viestilaatikko"  */   
        mensaje.innerText = palkinnot[paikka[0]];

        // Showing winner message in the console
        console.log("Voittoviesti: "+paikka[0]);

        // Calling the function "soundVoittaja" from the soundeffect.js file
        soundVoittaja(); 
   }
}

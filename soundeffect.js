/* 1.- All function of sound effects are gathered in the "soundeffect.js" file
   2.- Using the constructor function "Audio" to create 
       an html audio element from the link provided.
   3.- Using the "play()" method to start playing the audio element provided by the link given.
*/
function soundVoittaja(){
    let audioVoittaja = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3");
    audioVoittaja.play(); 
}

function painaNappiSound(){
    let audioNappiSound = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");
    audioNappiSound.play();    
}

function muutaKuvaSound(){
    let audioMuutaKuvaSound = new Audio("https://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/missile.mp3");
    audioMuutaKuvaSound.play(); 
}


/* 
All function effects are gathered in a .js file
Using "Audio" property to ...
Using "play()" method to ...
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
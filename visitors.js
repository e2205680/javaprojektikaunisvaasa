const count = document.getElementById("count");

countingYourVisits();

function countingYourVisits(){
let visit;

if(!localStorage.getItem("visit")) {

    localStorage.setItem("visit", 1);
}  

else {

visit = +localStorage.getItem("visit");

const countingVisits = visit + 1;

localStorage.setItem("visit", countingVisits);

console.log("Tämä on vierailusi numero: " + countingVisits);
}

count.innerText = localStorage.getItem("visit");

}


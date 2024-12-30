const count = document.getElementById("count");

countingYourVisits();

function countingYourVisits(){
let visitToWebPage;

if(!localStorage.getItem("visitToWebPage")) {

    localStorage.setItem("visitToWebPage", 1);
}  

else {

visitToWebPage = +localStorage.getItem("visitToWebPage");

const countingVisits = visitToWebPage + 1;

localStorage.setItem("visitToWebPage", countingVisits);

console.log("Tämä on vierailusi numero: " + countingVisits);
}

count.innerText = localStorage.getItem("visitToWebPage");

}


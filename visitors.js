const count = document.getElementById("count");

countingYourVisits();

function countingYourVisits(){

let visit_2;

if(!localStorage.getItem("visit_2")) {

    localStorage.setItem("visit_2", 1);
}  

else {

visit_2 = +localStorage.getItem("visit_2");

const countingVisits = visit_2 + 1;

localStorage.setItem("visit_2", countingVisits);

console.log("Tämä on vierailusi numero: " + countingVisits);
}

count.innerText = localStorage.getItem("visit_2");

}


const count = document.getElementById("count");

countingYourVisits();

function countingYourVisits(){
let visit_1;

if(!localStorage.getItem("visit_1")) {

    localStorage.setItem("visit_1", 1);
}  

else {

visit_1 = +localStorage.getItem("visit_1");

const countingVisits = visit_1 + 1;

localStorage.setItem("visit_1", countingVisits);

console.log("Tämä on vierailusi numero: " + countingVisits);
}

count.innerText = localStorage.getItem("visit_1");

}


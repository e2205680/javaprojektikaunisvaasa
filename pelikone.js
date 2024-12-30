//let pic = document.getElementById("kuva0");

let imagenes = [];
for (let index = 0; index <21; index++) {
    imagenes[index] = "img_"+index+".jpg";
} 

let premios =[]; // Mensajes numerados deacuerdo a la numeración de las pics

let numeros_actuales=[];

function inicio(){
    document.getElementById("tirar").onclick=lanzar_inicio;

}

function lanzar_inicio(){

    numeros_actuales=[];

    for (let k=0; k<document.getElemenstByClassName("ventana").length; k++){
        numeros_actuales.push(escoger_numero());
        mostrar_imagen(k,numeros_actuales[k]);
    }
    console.log(numeros_actuales);
}

function escoger_numero(){
    let azar=Math.floor(Math.random() * imagenes.length);
    return azar;
}

function mostrar_imagen(num, im){
    document.getElementsByClassName("imagen")[num,im].getElementsByTagName("img")[0].src=+imagenes[im];


}

function comparar(){

}

function actualizar(){

}

function mostrar_mensaje(){

}

function cerrar(){

}

function sonar(){

}
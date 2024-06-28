let lisNumSec = [];
let numMax = 10;
let numsec = genNumAle();
let intentos = 1;





function asigTex(element, texto) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = texto;
    return;
}


function verint() {
    let numusu = parseInt(document.getElementById("numusu").value);
    console.log(numusu === numsec);

    if(numusu === numsec){
        asigTex("p", `El numero secreto era ${numsec}, lo lograste en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if(numusu > numsec) {
        asigTex("p", `El numero secreto es menor que ${numusu}`);
    } else {
        asigTex("p", `El numero secreto es mayor que ${numusu}`);
    }
    intentos++;
    limCaj();
    console.log(intentos);
    return;
}

function genNumAle() {
    let numSecGen = Math.floor(Math.random()*numMax)+1;
    console.log(numSecGen);
    console.log(lisNumSec);

    if  (lisNumSec.length == numMax){
        asigTex('p', 'Se ha alcanzado el maximo de intentos');
    } else {
        if(lisNumSec.includes(numSecGen)) {
            return genNumAle();
        } else {
            lisNumSec.push(numSecGen);
        return numSecGen;
        }
    }
}

function limCaj() {
    document.querySelector("#numusu").value = "";
}

function conIni(){
    intentos = 1;
    asigTex('h1','Juego del numero secreto');
    asigTex('p',`Indica un número del 1 al ${numMax}`);
    return;
}

function reiJue() {
    limCaj();
    conIni();
    numsec = genNumAle();
    document.querySelector("#reiniciar").setAttribute("disabled",true);
    return;
}

conIni();



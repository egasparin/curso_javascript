// Promise

const fs = require('fs')

fs.readFile('./arquivo.txt', (err, content) => {
    console.log(String(content))
});






function mudaTexto(){
    document.getElementById("id").innerHTML = "<b>Mudou o texto e adicionou negrito</b>";
}

// Declaraçao normal
function redText(elemento){
    elemento.innerHTML = "<b>Mudou o texto e adicionou negrito</b>";
}
// Declaração Arrow-Function
// let redText = (elemento) => { elemento.innerHTML = "<b>Mudou o texto e adicionou negrito</b>";}

/*
function horario(){
    var horario = new Date;
    let minutos = horario.getMinutes();
    seconds = horario.getSeconds();
	console.log("Horario atual: " + horario.getHours() +":" +("00" + horario.getMinutes()).slice(-2));	
}

function teste(){
    console.log("Horario: " +horario.getHours);
    // console.log("Minutos: " +minutos );
    console.log("Segundos: " +seconds );
}
*/
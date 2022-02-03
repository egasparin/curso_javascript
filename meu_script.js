function horario(){
    var horario = new Date;
	alert("Horario atual: " + horario.getHours() +":" +("00" + horario.getMinutes()).slice(-2));	
}

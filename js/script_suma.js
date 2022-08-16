var num1, num2, respuesta;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//genera la suma - Numeros aleatorios entre 0 y 9
	num1 = Math.round(Math.random()*50); //opercacion para numero aleatorio
	num2 = Math.round(Math.random()*50);
	respuesta = num1 + num2;
	//asignamos lo números para que se muestren
	suma.innerHTML = num1 + " + " + num2 + " = ";

	//genero un número entre 0 y 2 para colocar la opcion correcta de manera aleatoria ya que son tres opciones
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
}

function controlarRespuesta(opcionElegida){

	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "Correcto";
		txt_msj.style.color="yellow";
		setTimeout(comenzar, 1000);
	}else{
		txt_msj.innerHTML = "Incorrecto";
		txt_msj.style.color="red";
		setTimeout(limpiar, 1000);

	}
}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();





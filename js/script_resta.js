// declaracion de variables
var num1;
var num2;
var respuesta;
texto_resta = document.getElementById("resta");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
texto_respuesta = document.getElementById("msj");
texto_resultado = document.getElementById("resultado");

function comenzar() {
  texto_resultado.innerHTML = "?";
  texto_respuesta.innerHTML = "";

  //genera la resta - Numeros aleatorios entre 0 y 20
  num1 = Math.round(Math.random() * 100); //opercacion para numero aleatorio
  num2 = Math.round(Math.random() * 20);
  respuesta = num1 - num2;
  //asignamos lo números para que se muestren
  resta.innerHTML = num1 + " - " + num2 + " = ";

  //genero un número entre 0 y 2 para colocar la opcion correcta de manera aleatoria ya que son 3 opciones
  listaOpciones = Math.round(Math.random() * 2);
  if (listaOpciones == 0) {
    op1.innerHTML = respuesta;
    op2.innerHTML = respuesta + 1;
    op3.innerHTML = respuesta - 1;
  }
  if (listaOpciones == 1) {
    op1.innerHTML = respuesta - 1;
    op2.innerHTML = respuesta;
    op3.innerHTML = respuesta - 2;
  }
  if (listaOpciones == 2) {
    op1.innerHTML = respuesta + 2;
    op2.innerHTML = respuesta + 3;
    op3.innerHTML = respuesta;
  }
}

function controlarRespuesta(opcionElegida) {
  texto_resultado.innerHTML = opcionElegida.innerHTML;
  if (respuesta == opcionElegida.innerHTML) {
    texto_respuesta.innerHTML = "Correcto";
    texto_respuesta.style.color = "yellow";
    setTimeout(comenzar, 1000);
  } else {
    texto_respuesta.innerHTML = "Incorrecto";
    texto_respuesta.style.color = "red";
    setTimeout(limpiar, 1000);
  }
}
function limpiar() {
  texto_resultado.innerHTML = "?";
  texto_respuesta.innerHTML = "";
}
comenzar();

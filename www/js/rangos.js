var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var mostrarPeso = document.getElementById("datoPeso");

output.innerHTML = slider.value + " KG";


slider.oninput = function() {
  output.innerHTML = this.value + " KG";
  mostrarPeso.style.visibility="visible";
}

var miR = document.getElementById("miRango");
var salida = document.getElementById("valor");
var mostrar = document.getElementById("mostrarDato");
salida.innerHTML = miR.value + " CM";

miR.oninput = function() {
  salida.innerHTML = this.value + " CM";
  mostrar.style.visibility="visible";
}

var rangoDominada = document.getElementById("recta");
var salir = document.getElementById("salida");
salir.innerHTML = rangoDominada.value+" Dominadas";

rangoDominada.oninput = function() {
  salir.innerHTML = this.value+" Dominadas";
}
//import analyzer from './analyzer.js';                          

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

//Event Listener Textarea
const texto = document.querySelector("textarea")
texto.addEventListener("input", getText)
function getText(){
    let texto2 = document.querySelector(textarea).value
    document.getElementById("vista").innerHTML = texto2
}

//Event Listener Botón 
const boton = document.getElementById("reset-button");
boton.addEventListener("click", resetMetricas)
function resetMetricas(){
    document.querySelector("textarea").value=""; //En el textarea se ingresará el valor nulo
}
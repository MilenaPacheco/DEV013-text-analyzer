import analyzer from './analyzer.js';                          

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const text = document.querySelector("textarea");


text.addEventListener("input", function() {
  const words = analyzer.getWordCount(text.value);
  document.querySelector("li.estilo1:nth-child(3)").innerHTML ="Palabras: "+ words

  const characterCount = analyzer.getCharacterCount(text.value);
  document.querySelector("li.estilo1:nth-child(1)").innerHTML = "Caracteres: " + characterCount

  const characterExcluSpaces = analyzer.getCharacterCountExcludingSpaces(text.value);
  document.querySelector("li.estilo1:nth-child(2)").innerHTML="Caracteres Sin Espacio: "+ characterExcluSpaces

  const textWordLenght = analyzer.getAverageWordLength(text.value);
  document.querySelector("li.estilo2:nth-child(6)").innerHTML = "Promedio Longitud: " + textWordLenght;

  const  numberCount =analyzer.getNumberCount(text.value);
  document.querySelector("li.estilo2:nth-child(4)").innerHTML = "Números: " + numberCount;

  const numberSum = analyzer.getNumberSum(text.value);
  document.querySelector("li.estilo2:nth-child(5)").innerHTML = "Suma Números: " + numberSum
} )


//Event Listener Botón 
const boton=document.getElementById("reset-button"); //asignar variable del HTML al JS
boton.addEventListener("click", resetMetricas) //Al hacer el evento haga esta función
function resetMetricas(){
  document.querySelector("textarea").value=""; //En el textarea se ingresará el valor nulo
  document.querySelector("li.estilo1:nth-child(3)").innerHTML ="Palabras: ";
  document.querySelector("li.estilo1:nth-child(1)").innerHTML = "Caracteres: ";
  document.querySelector("li.estilo1:nth-child(2)").innerHTML="Caracteres Sin Espacio: ";
  document.querySelector("li.estilo2:nth-child(6)").innerHTML = "Promedio Longitud: ";
  document.querySelector("li.estilo2:nth-child(4)").innerHTML = "Números: ";
  document.querySelector("li.estilo2:nth-child(5)").innerHTML = "Suma Números: ";
}
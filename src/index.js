import analyzer from './analyzer.js';                          

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const text = document.querySelector("textarea");


text.addEventListener("input", function() {
  const words = analyzer.getWordCount(text.value);
  document.querySelector(".wordCount").innerHTML ="Palabras: "+ words

  const characterCount = analyzer.getCharacterCount(text.value);
  document.querySelector(".caracterCount").innerHTML = "Caracteres: " + characterCount

  const characterExcluSpaces = analyzer.getCharacterCountExcludingSpaces(text.value);
  document.querySelector(".character-no-spaces").innerHTML="Caracteres Sin Espacio: "+ characterExcluSpaces

  const textWordLenght = analyzer.getAverageWordLength(text.value);
  document.querySelector(".word-length-average").innerHTML = "Promedio Longitud: " + textWordLenght;

  const  numberCount =analyzer.getNumberCount(text.value);
  document.querySelector(".number-count").innerHTML = "Números: " + numberCount;

  const numberSumTotal = analyzer.getNumberSum(text.value);
  document.querySelector(".number-sum").innerHTML = "Suma Números: " + numberSumTotal
} )


//Event Listener Botón 
const boton=document.getElementById("reset-button"); //asignar variable del HTML al JS
boton.addEventListener("click", resetMetricas) //Al hacer el evento haga esta función
function resetMetricas(){
  document.querySelector("textarea").value=""; //En el textarea se ingresará el valor nulo
  document.querySelector(".wordCount").innerHTML ="Palabras: ";
  document.querySelector(".caracterCount").innerHTML = "Caracteres: ";
  document.querySelector(".character-no-spaces").innerHTML="Caracteres Sin Espacio: ";
  document.querySelector(".word-length-average").innerHTML = "Promedio Longitud: ";
  document.querySelector(".number-count").innerHTML = "Números: ";
  document.querySelector(".number-sum").innerHTML = "Suma Números: ";
}
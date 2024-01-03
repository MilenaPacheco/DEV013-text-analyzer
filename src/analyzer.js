const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(" ").length;
    return words
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCount = text
    return characterCount.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characterExcluSpaces = text.trim().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").length;
    return characterExcluSpaces
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(" ").length
    const characterExcluSpaces = text.trim().replace(/\s+/g, "").length;
    let wordLenght = 0;
    if (words===0){
      wordLenght = 0;
    } else{
      wordLenght = (parseFloat(characterExcluSpaces)/parseFloat(words));
    }
    return Number(wordLenght.toFixed(2))
  },
  getNumberCount: (text) => {
    const  numberCount = text.match(/\b\d+(\.\d+)?\b/g);
    if (numberCount){
      return numberCount.length
    }
    else{
      return 0; 
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const array = text.split(" ");
    let contador=0;
    for(let i=0; i<array.length; i++){
      const elemento = array[i].replace(/\.$/, "");
      if(Number(elemento) && elemento !== ""){
        contador = parseFloat(elemento) + contador
      }
    }
    return contador
  },
}


export default analyzer;

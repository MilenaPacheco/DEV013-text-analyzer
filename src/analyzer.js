const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(" ").length;
    return words
    //console.log(words)
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCount = text
    //console.log(characterCount.length)
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
    //console.log(wordLenght);
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
    let numberSumTotal=0;
    const numberSum2 = text.trim().split(" ");
    console.log("Number sum 2: "+numberSum2)
    //console.log(numberSum2)
    for(let i=0;i<numberSum2.length;i++){
      if (Number(numberSum2[i])){
        numberSum2[i]=parseFloat(numberSum2[i]);
        console.log("Array: "+numberSum2)
        numberSumTotal=parseFloat(numberSum2[i]+numberSumTotal)
        console.log(numberSumTotal)
        //console.log("Suma Array: "+ numberSumTotal)

      }
    }
      
    return numberSumTotal
  },
};

export default analyzer;

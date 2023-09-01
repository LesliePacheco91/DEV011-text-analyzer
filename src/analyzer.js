const analyzer = {  
  getWordCount: (text) => {

    if(text !== ""){

      const words = text.trim();

      const worsExcluiSpaces = words.split(' ');

      return worsExcluiSpaces.length;

    }else{


      return 0;
    }

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {

    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {

    const  counCharter =  text.replace(/[\s.,;]/g, "");

    return counCharter.length;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => { 
    
    const  countCharacters =  text.replace(/[\s]/g, ""); // caracteres

    const words = text.trim(); 
    const worsExcluiSpaces = words.split(' ').length; // total de palabras

    const charters =  countCharacters.length

    const longitud = charters / worsExcluiSpaces;

    const result  = longitud.toFixed(2);

    return parseFloat(result);
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {

    const getNumber =  text.match(/\b\d+(\.\d+)\b|\b\d+\b/g);
    
    if(getNumber){

      const  getNumberCount =  getNumber.length;

      return getNumberCount;

    }else{

      return 0;
    }
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    

    const  getNumber =  text.match(/\b\d+(\.\d+)\b|\b\d+\b/g);

    if(getNumber !== null){

      let getSum = 0;

      for (let i = 0; i < getNumber.length; i++){

        getSum = getSum + parseFloat(getNumber[i]);

      }

      return getSum;

    }else{
      
      return 0 ;
    }

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

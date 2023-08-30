const analyzer = {  
  getWordCount: (text) => {
    let words = text.trim();

    let worsExcluiSpaces = words.split(' ');

    return worsExcluiSpaces.length;


    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {

    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {

    let  counCharter =  text.replace(/[\s.,;]/g, "");

    return counCharter.length;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => { 
    
    let words = text.trim();

    let worsExcluiSpaces = words.split(' ').length; // total de palabras

    let charters =  text.length

    let longitud = charters / worsExcluiSpaces;

    return longitud;
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {

    let  getNumber =  text.match(/(\d+)/g).length;

    if(getNumber >0){

      return getNumber;

    }else{
      return 0;
    }
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {

      let getSum = 0;

      let  getNumber =  text.match(/(\d+)/g);

      for (let i = 0; i < getNumber.length; i++){

            getSum = getSum + parseInt(getNumber[i]);

      }

      return getSum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

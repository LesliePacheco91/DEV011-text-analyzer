import analyzer from './analyzer.js';

    let text = document.querySelector("textarea[name='user-input']");
    

    text.addEventListener('keyup',function (){

        document.querySelector(".word-count").innerHTML = 'Palabras: '+analyzer.getWordCount(text.value);
    
        document.querySelector(".character-count").innerHTML = 'Caracteres: '+analyzer.getCharacterCount(text.value);

        document.querySelector(".character-no-spaces-count").innerHTML = 'Caracteres sin espacios: '+ analyzer.getCharacterCountExcludingSpaces(text.value);

        document.querySelector(".word-length-average").innerHTML = 'Promedio de longitud: '+analyzer.getAverageWordLength(text.value);

        document.querySelector(".number-count").innerHTML = 'Numeros: '+analyzer.getNumberCount(text.value);

        document.querySelector(".number-sum").innerHTML = 'Suma de numeros: '+analyzer.getNumberSum(text.value);

    });

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
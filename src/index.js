import analyzer from './analyzer.js';

    let text = document.querySelector("textarea[name='user-input']");
    let ResetBotton = document.getElementById("reset-button");
    

    text.addEventListener('keyup',function (){

        document.querySelector(".word-count").innerHTML = 'Palabras: '+analyzer.getWordCount(text.value);
    
        document.querySelector(".character-count").innerHTML = 'Caracteres: '+analyzer.getCharacterCount(text.value);

        document.querySelector(".character-no-spaces-count").innerHTML = 'Caracteres sin espacios: '+ analyzer.getCharacterCountExcludingSpaces(text.value);

        document.querySelector(".word-length-average").innerHTML = 'Promedio de longitud: '+analyzer.getAverageWordLength(text.value);

        document.querySelector(".number-count").innerHTML = 'Numeros: '+analyzer.getNumberCount(text.value);

        document.querySelector(".number-sum").innerHTML = 'Suma de numeros: '+analyzer.getNumberSum(text.value);

    });

    ResetBotton.addEventListener('click',() =>{

        document.querySelector("textarea[name='user-input']").value = '';

        document.querySelector(".character-count").innerHTML = 'Caracteres: 0';

        document.querySelector(".character-no-spaces-count").innerHTML = 'Caracteres sin espacios: 0';

        document.querySelector(".word-count").innerHTML = 'Palabras: 0';

        document.querySelector(".word-length-average").innerHTML = 'Promedio de longitud: 0';

        document.querySelector(".number-count").innerHTML = 'Numeros: 0';

        document.querySelector(".number-sum").innerHTML = 'Suma de numeros: 0';

    });

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
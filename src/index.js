import analyzer from './analyzer.js';

const text = document.querySelector("textarea[name='user-input']");
const ResetBotton = document.getElementById("reset-button");
    

text.addEventListener('keyup',function (){

  document.querySelector("li[data-testid='word-count']").innerHTML = 'Palabras: '+analyzer.getWordCount(text.value);
    
  document.querySelector("li[data-testid='character-count']").innerHTML = 'Caracteres: '+analyzer.getCharacterCount(text.value);

  document.querySelector("li[data-testid='character-no-spaces-count']").innerHTML = 'Caracteres sin espacios: '+ analyzer.getCharacterCountExcludingSpaces(text.value);

  document.querySelector("li[data-testid='word-length-average']").innerHTML = 'Promedio de longitud: '+analyzer.getAverageWordLength(text.value);

  document.querySelector("li[data-testid='number-count']").innerHTML = 'Numeros: '+analyzer.getNumberCount(text.value);

  document.querySelector("li[data-testid='number-sum']").innerHTML = 'Suma de numeros: '+analyzer.getNumberSum(text.value);

});

ResetBotton.addEventListener('click',() =>{

  document.querySelector("textarea[name='user-input']").value = '';

  document.querySelector("li[data-testid='word-count']").innerHTML = 'Palabras: 0';
    
  document.querySelector("li[data-testid='character-count']").innerHTML = 'Caracteres: 0';

  document.querySelector("li[data-testid='character-no-spaces-count']").innerHTML = 'Caracteres sin espacios: 0';

  document.querySelector("li[data-testid='word-length-average']").innerHTML = 'Promedio de longitud: 0';

  document.querySelector("li[data-testid='number-count']").innerHTML = 'Numeros: 0';

  document.querySelector("li[data-testid='number-sum']").innerHTML = 'Suma de numeros: 0';

});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
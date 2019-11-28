/*Search function*/

const searchField = document.querySelector('.searchField');
const searchButton = document.querySelector('.searchButton');
let searchFieldString = String(searchField.value);
let searchResults = document.querySelector('.searchResults');
let grammarExercises = ['Where is it?', 'What is this?', 'I see it. It\'s here'];  


searchButton.onclick = function() { 
    for (let i = 0; i < grammarExercises.length; i++) {
    if (searchFieldString === grammarExercises.values[i])
    {searchResults.innerHTML = grammarExercises[i];}
      };
};

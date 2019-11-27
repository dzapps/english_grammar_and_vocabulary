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

/*Side-menu hover animation*/

const settingMenu = document.querySelector('.setting_menu');

settingMenu.addEventListener("mouseover", function() {
  settingMenu.classList.add('setting_menu__hovered');

  if (window.innerWidth < '768px') {
    settingMenu.addEventListener("click", function() {
    settingMenu.classList.toggle('setting_menu setting_menu__hovered')
  }
    )}

})

settingMenu.addEventListener("mouseout", function() {
  settingMenu.classList.remove('setting_menu__hovered')
})

/*Side-menu contrast feature*/
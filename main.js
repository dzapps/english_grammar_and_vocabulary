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
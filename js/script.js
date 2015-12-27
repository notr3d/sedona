var menuOpen = document.querySelector("button.main-menu__burger");
var menuClose = document.querySelector("button.main-menu__cross");
var menuLinks = document.querySelectorAll("a.main-menu__link");

menuOpen.addEventListener("click", function(){
  for(var i = 0; i < menuLinks.length; i++){
    menuLinks[i].style.display = 'block';
  }
});
menuClose.addEventListener("click", function(){
  for(var i = 0; i < menuLinks.length; i++){
    menuLinks[i].style.display = 'none';
  }
})


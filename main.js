const hamburgerMenu = document.getElementById("hamburger-menu");
const openMenu = document.getElementById('open-menu');
openMenu.addEventListener('click', function(){
    hamburgerMenu.classList.add("active");
})
const closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', function(){
    hamburgerMenu.classList.remove("active");
})
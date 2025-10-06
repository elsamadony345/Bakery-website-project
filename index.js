window.addEventListener("scroll" , function() {
  const navbar = document.querySelector("nav");
  const logo = document.getElementById("navbar-logo");
  if ( window.scrollY > 80 ) {
    navbar.classList.add("navbar-moved");
    logo.setAttribute("src" , "bakery-color.png");
  }else{
    navbar.classList.remove("navbar-moved");
    logo.setAttribute("src" , "bakery-light-1.png");
  }
})
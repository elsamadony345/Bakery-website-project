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

// Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const overlay = document.getElementById('overlay');
        const menuLinks = document.querySelectorAll('.navigation-links');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
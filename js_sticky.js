window.onscroll = function () {stickyNav()}; // function stickyNav executes on scrolling

var navbar = document.getElementById("nav"); // Get the navbar 

var sticky = navbar.offsetTop; // Get the offset position of the navbar 

function stickyNav() {                // Adding the sticky class to the navbar reaching its scroll position. Remove "sticky" leaving the scroll position 
  if (window.pageYOffset >= sticky) { 
    navbar.classList.add("sticky");
    navbar.firstElementChild.lastElementChild.classList.add("lightSpeedIn");
    } else { 
    navbar.classList.remove("sticky"); 
  } 
}




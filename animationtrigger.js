/*
Service Text Animation
*/

window.addEventListener("scroll", animationTrigger);

function animationTrigger() {

var animatedBlock = document.getElementById("service-animate"); 

var pos = animatedBlock.offsetTop + 170;               
  if (window.pageYOffset >= pos) { 
    animatedBlock.classList.add("fadeInUp") 
    } 
}

/*
Service Block Animation
*/
window.addEventListener("scroll", animatedSBlock);

function animatedSBlock() {

var animatedBlock = document.getElementById("animated-blocks"); 

var pos = animatedBlock.offsetTop + 450;               
  if (window.pageYOffset >= pos) { 
    var children =  animatedBlock.children;
        for (i = 0; i < children.length; i++) {
            children[i].classList.add("slideInLeft");
        }
        for (i = 0; i < children.length; i+=2) {
            children[i].classList.add("slideInRight");
        }
    } 
}

/*
My Works Text Animation
*/
window.addEventListener("scroll", workAnimationTrigger);

function workAnimationTrigger() {

var animatedBlock = document.getElementById("myworks-animate"); 

var pos = animatedBlock.offsetTop + 900;               
  if (window.pageYOffset >= pos) { 
    animatedBlock.classList.add("fadeInUp") 
    } 
}

/*
My Works Blocks Animation
*/

window.addEventListener("scroll", animatedWorkBlock);

function animatedWorkBlock() {

var animatedBlock = document.getElementById("animatedwork-blocks"); 

var pos = animatedBlock.offsetTop + 1200;               
  if (window.pageYOffset >= pos) { 
    animatedBlock.firstElementChild.classList.add("zoomIn");
    animatedBlock.firstElementChild.nextElementSibling.classList.add("zoomIn");
    animatedBlock.firstElementChild.nextElementSibling.nextElementSibling.classList.add("zoomIn");
    } 
}

window.addEventListener("scroll", animatedWorkBlockrow2);

function animatedWorkBlockrow2() {

var animatedBlock = document.getElementById("animatedwork-blocks"); 

var pos = animatedBlock.offsetTop + 1450;               
  if (window.pageYOffset >= pos) { 
    animatedBlock.lastElementChild.classList.add("zoomIn");
    animatedBlock.lastElementChild.previousElementSibling.classList.add("zoomIn");
    animatedBlock.lastElementChild.previousElementSibling.previousElementSibling.classList.add("zoomIn");
    } 
}

/*
My Skills Text Animation
*/

window.addEventListener("scroll", skillsAnimationTrigger);

function skillsAnimationTrigger() {

var animatedBlock = document.getElementById("myskills-animate"); 

var pos = animatedBlock.offsetTop + 2000;               
  if (window.pageYOffset >= pos) { 
    animatedBlock.classList.add("fadeInUp", "mypros-visible") 
    } 
}

/*
MY Pros Text Animation
*/

window.addEventListener("scroll", prosAnimationTrigger);

function prosAnimationTrigger() {

var prosAnimatedBlock = document.getElementById("mypros-animate"); 

var pos = prosAnimatedBlock.offsetTop + 2800;               
  if (window.pageYOffset >= pos) { 
    prosAnimatedBlock.classList.add("fadeInUp", "mypros-visible"); 
    } 
}

/*
Contact Me Text Animation
*/

window.addEventListener("scroll", contactAnimationTrigger);

function contactAnimationTrigger() {

var contactAnimatedBlock = document.getElementById("contact-animate"); 

var pos = contactAnimatedBlock.offsetTop + 3400;               
  if (window.pageYOffset >= pos) { 
    contactAnimatedBlock.classList.add("fadeInUp", "contact-visible"); 
    } 
}

/*
Contact Form Animation
*/

window.addEventListener("scroll", formAnimationTrigger);

function formAnimationTrigger() {

var formAnimatedBlock = document.getElementById("contact-form"); 

var pos = formAnimatedBlock.offsetTop + 3600;               
  if (window.pageYOffset >= pos) { 
    formAnimatedBlock.classList.add("fadeInUp", "contact-visible"); 
    } 
}


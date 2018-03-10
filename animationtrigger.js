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
My Skillss Text Animation
*/

window.addEventListener("scroll", skillsAnimationTrigger);

function skillsAnimationTrigger() {

var animatedBlock = document.getElementById("myskills-animate"); 

var pos = animatedBlock.offsetTop + 1800;               
  if (window.pageYOffset >= pos) { 
    animatedBlock.classList.add("fadeInUp") 
    } 
}


/*
Skills Progress Bar Animation
*/


var cc = 1; 
$(document).scroll(function() { 
  $("#skills-blocks").each(function () { 
    var pos = $(this).offset().top, 
      topWindow = $(window).scrollTop(); 
        if (pos < topWindow + 300) { 
          if (cc < 2){ 
            cc = cc + 2; 
            var ctx0 = document.getElementById('skill_canvas1').getContext('2d'); 
            var ctx1 = document.getElementById('skill_canvas2').getContext('2d'); 
            var ctx2 = document.getElementById('skill_canvas3').getContext('2d'); 
            var ctx3 = document.getElementById('skill_canvas4').getContext('2d'); 

            var al = 0; 
            var start = 4.72; 

            var cw = ctx0.canvas.width; 
            var ch = ctx0.canvas.height; 

            var cw1 = ctx1.canvas.width; 
            var ch1 = ctx1.canvas.height;

            var cw2 = ctx2.canvas.width; 
            var ch2 = ctx2.canvas.height;

            var cw3 = ctx3.canvas.width; 
            var ch3 = ctx3.canvas.height;
            
            var diff; 
            function progressSim(){ 
                diff = ((al / 100) * Math.PI*2*10).toFixed(2); 
                ctx0.clearRect(0, 0, cw, ch); 
                ctx0.lineWidth = 10; 
                ctx0.strokeStyle = "#006400";  
                ctx0.beginPath(); 
                ctx0.arc(100, 100, 80, start, diff/10+start, false); 
                ctx0.stroke(); 
                if(al >= 90){ 
                    clearTimeout(sim); 
                } 
                al++; 
              } 
              var sim = setInterval(progressSim, 1); 


            function progressSim1(){ 
                diff = ((al / 100) * Math.PI*2*10).toFixed(2); 
                ctx1.clearRect(0, 0, cw1, ch1); 
                ctx1.lineWidth = 10;  
                ctx1.strokeStyle = "#006400"; 
                ctx1.beginPath(); 
                ctx1.arc(100, 100, 80, start, diff/10+start, false); 
                ctx1.stroke(); 
                if(al >= 80){ 
                    clearTimeout(sim1); 
                } 
                al++; 
              } 
              var sim1 = setInterval(progressSim1, 50); 


            function progressSim2(){ 
                diff = ((al / 100) * Math.PI*2*10).toFixed(2); 
                ctx2.clearRect(0, 0, cw2, ch2); 
                ctx2.lineWidth = 10; 
                ctx2.strokeStyle = "#006400"; 
                ctx2.beginPath(); 
                ctx2.arc(100, 100, 80, start, diff/10+start, false); 
                ctx2.stroke(); 
                if(al >= 90){ 
                    clearTimeout(sim2); 
                } 
                al++; 
              } 
              var sim2 = setInterval(progressSim2, 50); 

            function progressSim3(){ 
                diff = ((al / 100) * Math.PI*2*10).toFixed(2); 
                ctx3.clearRect(0, 0, cw2, ch2); 
                ctx3.lineWidth = 10; 
                ctx3.strokeStyle = "#006400"; 
                ctx3.beginPath(); 
                ctx3.arc(100, 100, 80, start, diff/10+start, false); 
                ctx3.stroke(); 
                if(al >= 85){ 
                    clearTimeout(sim3); 
                } 
                al++; 
              } 
              var sim3 = setInterval(progressSim3, 50); 

            } 
        } 
    }) 
});

/*
Skills Percents Animation
*/
var time = 1.5;
var ccPer = 1;
var accessSkill = $(".skillblocks div"); 
$(document).scroll(function() { 
  $("#skills-blocks").each(function () { 
    var pos = $(this).offset().top, 
      topWindow = $(window).scrollTop(); 
        if (pos < topWindow + 300) { 
          if (ccPer < 2){
            accessSkill.addClass("skill-visible"); 
            $(".skill-percent").each(function(){
                var i = 1;
                var num = $(this).data('num');
                var step = 1000 * time / num;
                var that = $(this);
                var int = setInterval(function(){
                    if(i <= num) {
                        that.html(i + "%");
                    }
                    else {
                        ccPer = ccPer + 2;
                        clearInterval(int);
                    }
                    i++;
                    }, step);
                }); 
            }
        }   
    });
});


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


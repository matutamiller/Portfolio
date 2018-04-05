	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

var loader = document.getElementById("preloader"); //getting element (gif image)
function loaderFirst(el) {                         //changing visibility of the element on set interval
  el.style.opacity = 1;                            //setting initial opacity
  var intLoader = setInterval(function(){          //setting interval
    el.style.opacity = el.style.opacity - 0.05;    //decrementing opacity
    if (el.style.opacity <= 0.05) {         
      clearInterval(intLoader);                    //clearing interval on min opacity
      loader.style.display = "none";               //hiding element
    } 
  }, 20);                                          //setting time of a function
} 
window.onload = function(){                        //calling the function on window load with a 1s delay
  setTimeout(function(){ 
    loaderFirst(loader); 
  }, 1000); 
};

/* ---------------------------------------------- /*
 * Sticky Navbar
/* ---------------------------------------------- */

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




/* ---------------------------------------------- /*
* Menu
/* ---------------------------------------------- */

(function () {
    document.getElementById('menu_button').onclick = function () {
        if (this.className != 'active'){
            this.className = 'active';
            document.getElementById('burger').className = 'active';
            
        } else {
            this.className = '';
            document.getElementById('burger').className = '';
        }
    }
})();



/* ---------------------------------------------- /*
* Rotator  
/* ---------------------------------------------- */
$(function() {
  /*
  - how to call the plugin:
  $( selector ).cbpQTRotator( [options] );
   - options:
  {
  // default transition speed (ms)
  speed : 700,
  // default transition easing
  easing : 'ease',
  // rotator interval (ms)
  interval : 8000
  }
  - destroy:
  $( selector ).cbpQTRotator( 'destroy' );
  */

  $( '#cbp-qtrotator' ).cbpQTRotator();

});


/* ---------------------------------------------- /*
 * E-mail validation
/* ---------------------------------------------- */
(function($){
  $(document).ready(function() {
    function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };

/* ---------------------------------------------- /*
* Contact form ajax
/* ---------------------------------------------- */

  $('#contact-form').submit(function(e) {

    e.preventDefault();

    var c_name = $('#c_name').val();
    var c_email = $('#c_email').val();
    var c_message = $('#c_message ').val();
    var response = $('#contact-form .ajax-response');
      
      var formData = {
        'name'       : c_name,
        'email'      : c_email,
        'message'    : c_message
      };

      if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
        response.fadeIn(500);
        response.html('Please fix the errors and try again.');
      } else {
           $.ajax({
              type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
              url         : 'assets/php/contact.php', // the url where we want to POST
              data        : formData, // our data object
              dataType    : 'json', // what type of data do we expect back from the server
              encode      : true,
              success   : function(res){
                      $('#c_name').val("");
                      $('#c_email').val("");
                      $('#c_message ').val("");
                      var ret = $.parseJSON(JSON.stringify(res));
                      response.html(ret.message).fadeIn(500);
              }
            });
        }           
              return false;
      });

  });

/* ---------------------------------------------- /*
 * Smooth scroll / Scroll To Top
/* ---------------------------------------------- */

$('a[href="#startpage"], a[href="#services"], a[href="#myworks"], a[href="#myskills"], a[href="#mypros"], a[href="#contact"]').click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 1500,
        easing: "swing"
        });
          return false;
        });
})(jQuery);




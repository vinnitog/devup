$(document).on('click', '.efeito-gif>div>a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

$(document).on('click', 'li>a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

// animacao da navbar
window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar-scroll-animation");
var navbar = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= navbar) {
    header.classList.add("fixed-top");
    header.style.opacity = "0.8";
  } else {
    header.classList.remove("fixed-top");
    header.style.opacity = "1";
  }
}
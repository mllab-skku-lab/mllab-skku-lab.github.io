
    $(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(3000);

    $(".cta").click(function(event){
        myAction();
        event.preventDefault();
        linkLocation = this.getAttribute('data-href')
        $("body").fadeOut(2000, redirectPage);
    });

    $(".hype").click(function(event){
        myAction();
        event.preventDefault();
        linkLocation = this.getAttribute('data-href')
        $("body").fadeOut(2000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});

  function myAction() {
    document.getElementsByClassName("transition")[0].classList.toggle("anim-trans");
    return true;
  }
  /* make bar to x*/
  function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('menu').style.display =
    document.getElementById('menu').style.display == 'block' ? 'none' : 'block';
  }

  function openNav() {
    var width = window.innerWidth;
    if(width > 720)
      document.getElementById("mySidenav").style.width = "30%";
    else
      document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

    var slideIndex = 0;
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        /*if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        */
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }



      window.onload = function() {
        setInterval(function() {
          if (slideIndex == 3) {
            slideIndex = 0;
          }
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slideIndex++;
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }, 2000);
      }

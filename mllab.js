
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


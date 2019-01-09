$( function() {
     $('#spinner').removeAttr( "style" ).fadeOut(2000,function(){
            $('.fa-spin').fadeIn(1000);});
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

 
  } );


   var number = Math.floor(Math.random() * 5) + 1;

   function changeslide() {
       number++;
       if (number > 5) number = 1;
       var file = "<img src=\"img/slide/landscape0" + number + ".jpg\" />";

       document.getElementById("slider").innerHTML = file;

       setTimeout("changeslide()", 2000);
   }

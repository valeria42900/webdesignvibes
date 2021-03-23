var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

document.getElementById("showImage").onclick = function() {
    document.getElementById("theImage").style.visibility = "visible";
}


<script>
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName(" mySlides"); if (n> x.length) {slideIndex = 1}
            if (n < 1) {slideIndex=x.length} for (i=0; i < x.length; i++) { x[i].style.display="none" ; } x[slideIndex-1].style.display="block" ; } </script>




              <script>
                function myFunction() {
                  var x = document.getElementById("myDIV");
                  if (x.style.display === "none") {
                    x.style.display = "block";
                  } else {
                    x.style.display = "none";
                  }
                }
              </script>

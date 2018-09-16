var textfield;
var npc;
var output;
var input;
var submit;

function preload(){
  npc = loadStrings("npc.txt");
}

function setup() {
  noCanvas();
  textfield = select("#txt");
  output = select('#output');
  submit = select('#submit');
  submit.mousePressed(newText);
  noLoop();
  // npc.indexOf(textfield.value()) > -1  // found results
}


var arr =[];
function newText(input) {
  var b = 94;
  var str1 = textfield.value();
  var liczby = createDiv(str1)
    for (n=0; n<=str1.length-b; n++){
      res = str1.substring(n, n+b);
      arr[n]=res;
      push();
    }
  }

var texting = textfield.value();
var oneline;
function find(){
for (var i=0; i < npc.length; i++) {
  for (var j=0; i < npc.length; j++){
  npc[i] = oneline[j]
}
oneline[j].indexOf("vampire") > -1
console.log(oneline)
}
}

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

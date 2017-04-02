/*
Declare variables:
masthead (HTML container storing
the current slide - slide-show part)

slides (array of elements storing
all slides - slide-show part)

buttons (collected list of
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */

var y, i, masthead;

y = 0;

masthead = document.getElementsByClassName("slides");

runSlides();

function runSlides() {
    for (i = 0; i < masthead.length; i += 1) {
       masthead[i].style.display = "none";
    }
    y += 1;
    if (y > masthead.length) {y = 1}
    masthead[y-1].style.display = "block";
    setTimeout(runSlides, 6000);
}

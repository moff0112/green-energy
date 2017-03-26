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

var masthead, slideIndex, slides, buttons, contents, container, i, k;

/*
Access empty div with the
class "mh-image" (look at the HTML structure
above), and pass the reference
to variable masthead */

/*
Assign 4 elements to array slides
(slide-show content) */

/*
Define function fadeOut. This function will
make currently displayed slide disappear. */
   /*
   Use style object with property opacity
   on masthead and set it to 0. */
/*
End function fadeOut. */

/*
Use i as index pointer for the array slides.
Assign i with initial value 0. */

/*
Define function runSlides.
This function will loop through the array slides. */
   /*
   Set opacity of masthead to 1.
   Make sure masthead is visible
   (use style object and opacity on masthead). */

   /*
   Check the value of i.
   If the value of i is greater than 3
   (3 is index of fourth slide),
   reset the value of i to 0
   (slide-show starts over). */

   /*
   Use i to pass the next in line slide
   from array slides to masthead. */

   /*
   Increment i. */

   /*
   Use setTimeOut() to call function fadeout
   after 5 seconds.(Slide will remain displayed
   for 5s and then, function fadeOut
   will make it disappear). */
/*
End function runSlides. */

/*
Call function runSlides. This will display
the first slide as the web page is loaded. */

/*
Use setInterval() to call function
runSlides every 6 seconds.
(Function runSlides is
a slide-show "engine"). */

var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("mh-image");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*
-------------------------------------
START CODING REVEAL-HIDE MAIN-CONTENT
-------------------------------------
HTML Structure:
<main>
  <div class="box">
    <h1>Heading ...</h1>
    <ul>
      <li><span class="btn" id="active">Chrome</span></li>
      <li><span class="btn">Firefox</span></li>
      <li><span class="btn">Opera</span></li>
    </ul>
    <div class="container"></div>
  </div>
</main> */


/*
Collect all buttons in array buttons.

Have all contents in array contents.

Access div with the class "container"
and pass the reference to variable container.*/

/*
Pass the value of the first array-element of array contents
to container (use innerHTML on container). */

/*
Define function handleClick
(pass event object to function) */
   /*
   Loop through buttons array and
   use removeAttribute() to remove
   id with the value active from an HTML element
   that contains this id (use hasAttribute() in if-statement to check). */

   /*
   Use innerHTML on ev.target to check which button
   was clicked. Based on this, display corresponding array
   element inside <div class="container"></div> */

   /*
   Add the class active to clicked list item (use ev.target) */
/*
End function handleClick. */

/*
Loop through buttons array and
register handleClick to listen for "click" event
on any button from array buttons. */

var y, i, masthead, k, buttons, contents, container;

y = 0;

masthead = document.getElementsByClassName("slides");

runSlides();

function runSlides() {
    for (i = 0; i < masthead.length; i += 1) {
        masthead[i].style.display = "none";
    }
    y += 1;
    if (y > masthead.length) {
        y = 1
    }
    masthead[y - 1].style.display = "block";
    setTimeout(runSlides, 6000);
}


buttons = document.querySelectorAll(".icons span");

contents = ["<p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>",
    "<p>Ontario began phasing out incandescent light bulbs ten years ago -- for good reason: incandescents burn lots of energy and die quickly. Compact fluorescent light bulbs (CFL) bulbs last eight times as long and use 75% less energy. LED bulbs last 25 times as long and use even less energy than CFLs. There are still incandescent lightbulbs hanging around, and if you want to help dim energy use it's best to switch them out for an effiecient bulb as soon as you can.</p>",
    "<p>One quick way of reducing your personal carbon footprint is to switch to a diet of mostly plants. People with a high meat diet have more than double the carbon emissions of vegans. Of course, you don't have to be a vegan to contribute fewer GHGs to the atmosphere -- a simple switch to a mostly plant diet has huge benefits. After all, the highest carbon emitting food is beef. Indulging in the occassional chicken or fish won't have a large carbon output. Lowering emissions begin with your own fuel!</p>"
];

imge = ["<img src='./img/bicycle.jpg'/>",
    "<img src='./img/bulb.jpg'/>",
    "<img src='./img/veggies.jpg'/>"
];


container = document.getElementsByClassName("container")[0];

photo = document.getElementsByClassName("slider")[0];

container.innerHTML = contents[0];
photo.innerHTML = imge[0];

function handleClick(ev) {
    ev.preventDefault();

    for (i = 0; i < buttons.length; i += 1) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }

        if (ev.target === buttons[i]) {
            container.innerHTML = contents[i];
            photo.innerHTML = imge[i];
            buttons[i].setAttribute("id", "active");
        }

    }
}

for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", handleClick, false);
}

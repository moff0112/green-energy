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

contents = ["<p>Lots of carbon is expelled in the simple act of going place to place in a car. But there's a simpler, cheaper, and more environmentally friendly way of transportation: the bicycle. If you live in an urban environment, there's no reason to not cycle as your main way of transit. Cycling is the fastest way of getting around in a city for trips under 10km -- and, compared to 271 grams of carbon per passenger kilometre expelled by a car, a cyclist only contributes 21 grams per passenger kilometre.<p>",
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

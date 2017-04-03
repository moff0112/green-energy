var y, i, masthead, k, buttons, contents, container;

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


buttons = document.getElementsByClassName("btn");

contents = ["<p>This is content one<p>",
            "<p>This is content two</p>",
            "<p>This is content three</p>"
          ];

imge = ["<img src='./img/hydro.jpg'/>",
        "<img src='./img/hydro.jpg'/>",
        "<img src='./img/hydro.jpg'/>"
];


container = document.getElementsByClassName("container")[0];

photo = document.getElementsByClassName("slider")[0];

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

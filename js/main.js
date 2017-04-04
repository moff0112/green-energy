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

contents = ["<p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>",
            "<p>Two Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>",
            "<p>Three dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>"
          ];

imge = ["<img src='./img/hydro.jpg'/>",
        "<img src='./img/hydro.jpg'/>",
        "<img src='./img/hydro.jpg'/>"
];


container = document.getElementsByClassName("container")[0];

photo = document.getElementsByClassName("slider")[0];

container.innerHTML = contents[0];

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

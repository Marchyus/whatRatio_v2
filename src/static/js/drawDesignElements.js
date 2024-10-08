import { Button, Dates } from "./designElements.js";

// NAV
// build NAV bar
const navBar = document.createElement("nav");
navBar.classList.add("header-buttons");

// generate buttons for NAV:
const buttonByBrand = new Button(
  "By model",
  "header_button_model",
  "header-button",
);
const buttonCustom = new Button(
  "Custom",
  "header_button_custom",
  "header-button",
);
const buttonCassettes = new Button(
  "Cassettes",
  "header_button_cassettes",
  "header-button",
);
const buttonCranksets = new Button(
  "Cranksets",
  "header_button_cranksets",
  "header-button",
);
const buttonFAQ = new Button("FAQ", "header_button_faq", "header-button");
const buttonAbout = new Button("About", "header_button_about", "header-button");

// div to hold dynamic part of header
const dynamicHeader = document.createElement("div");
dynamicHeader.classList = "dropdown-menu";
dynamicHeader.id = "dropdown-menu";
dynamicHeader.appendChild(buttonCassettes.buildButton());
dynamicHeader.appendChild(buttonCranksets.buildButton());
dynamicHeader.appendChild(buttonFAQ.buildButton());
dynamicHeader.appendChild(buttonAbout.buildButton());

// add buttons into NAV:
navBar.appendChild(buttonByBrand.buildButton());
navBar.appendChild(buttonCustom.buildButton());
// navBar.appendChild(buttonCassettes.buildButton());
// navBar.appendChild(buttonCranksets.buildButton());
// navBar.appendChild(buttonFAQ.buildButton());
// navBar.appendChild(buttonAbout.buildButton());

// Icon to open Nav bar on small screens
const burgerA = document.createElement("a");
burgerA.href = "javascript:void(0);";
burgerA.classList = "icon";
burgerA.onclick = "myFunction()";
const burgerI = document.createElement("i");
burgerI.classList = "fa fa-bars";
burgerA.appendChild(burgerI);
navBar.appendChild(burgerA);

navBar.appendChild(dynamicHeader);

// FOOTER
const footer = document.querySelector("footer");
const currentYear = new Dates().getYear();
const author = document.createElement("div");
author.innerText = "Marchyus";

footer.appendChild(currentYear);
footer.appendChild(author);

export { navBar };

import { Button, Dates, Heading } from "./designElements.js";


// NAV
// build NAV bar
const navBar = document.createElement('nav');
navBar.classList.add('header-links');

// generate buttons for NAV:
const buttonByBrand = new Button("By model", "button_model", "header-button").buildButton();
const buttonCustom = new Button("Custom", "button_custom", "header-button").buildButton();
const buttonCassettes = new Button("Cassettes", "button_cassettes", "header-button").buildButton();
const buttonCranksets = new Button("Cranksets", "button_cranksets", "header-button").buildButton();
const buttonFAQ = new Button("FAQ", "button_faq", "header-button").buildButton();
const buttonAbout = new Button("About", "button_about", "header-button").buildButton();

// add buttons into NAV:
navBar.appendChild(buttonByBrand);
navBar.appendChild(buttonCustom);
navBar.appendChild(buttonCassettes);
navBar.appendChild(buttonCranksets);
navBar.appendChild(buttonFAQ);
navBar.appendChild(buttonAbout);








// FOOTER
const footer = document.querySelector('footer');
const currentYear = new Dates().getYear();
const author = document.createElement('div');
author.innerText = "Marchyus"

footer.appendChild(currentYear);
footer.appendChild(author);





export {navBar};
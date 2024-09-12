import { navBar } from "./drawDesignElements.js";
import "../css/main.css";
import { Heading, Select } from "./designElements.js";






// NAV bar
const header = document.querySelector('header');
header.appendChild(navBar);
// #Container
const container = document.querySelector('#container');

// function to clear container
const cleanContainer = function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


// pseudo database
//TODO: move outside from main.js
const buttonActions = {
    button_model: {
        heading: "Compare ratios by brand",
        cssClassList: "button_model",
        init: function () {
            // draw brand select
            const brandDropdown = new Select("(optional) Brand", "brand", "brand");
            container.appendChild(brandDropdown.getSelect());
            brandDropdown.addOption("shimano", "Shimano");
            brandDropdown.addOption("sram", "Sram");
            brandDropdown.addOption("campagnolo", "Campagnolo");

            // draw series select
            const seriesDropdown = new Select("(optional) series", "series", "series");
            container.appendChild(seriesDropdown.getSelect());
            seriesDropdown.addOption("grx", "GRX");
            seriesDropdown.addOption("eagle", "Eagle");
            seriesDropdown.addOption("ultegra", "Ultegra");

            // draw ratio select
            const gearRatio = new Select("(optional) series", "ratio", "ratio");
            container.appendChild(gearRatio.getSelect());
            gearRatio.addOption("1x11", "1x11");
            gearRatio.addOption("1x12", "1x12");
            gearRatio.addOption("2x11", "2x11");

            // apply css
            container.className =  '';
            container.classList.add(this.cssClassList);
        }
    },
    button_custom: {
        heading: "Custom Gear comparison",
        init: function () {

        }
    },
    button_cassettes: {
        heading: "Cassettes in database",
        init: function () {
            
        }
    },
    button_cranksets: {
        heading: "Cranksets in database",
        init: function () {
            
        }
    },
    button_faq: {
        heading: "FAQ",
        init: function () {
            
        }
    },
    button_about: {
        heading: "About",
        init: function () {
            
        }
    }
};

// Add event listeners to buttons
const allHeaderButtons = document.querySelectorAll('.header-button');
allHeaderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cleanContainer();
        const action = buttonActions[button.id];
        
         if (action) {
            container.appendChild(new Heading(action.heading, "main-heading").buildHeading());
            action.init();
         }
    })
});


// Click button "by brand" on first page load

document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('#button_model');
    if (firstButton) {
        firstButton.click();
    }
})






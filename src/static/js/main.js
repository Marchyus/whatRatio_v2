import { navBar } from "./drawDesignElements.js";
import "../css/main.css";
import { Button, Heading, Select } from "./designElements.js";






// NAV bar
const header = document.querySelector('header');
header.appendChild(navBar);

// set

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
    header_button_model: {
        heading: "Compare ratios by brand",
        cssClassList: "container_model",
        init: function () {
            // apply css
            container.className =  '';
            container.classList.add(this.cssClassList);

            // draw brand select
            const brandDropdown = new Select("brand", "brand", "brand");
            container.appendChild(brandDropdown.getSelect());
            brandDropdown.addOption("shimano", "Shimano");
            brandDropdown.addOption("sram", "Sram");
            brandDropdown.addOption("campagnolo", "Campagnolo");
            brandDropdown.div.classList.add("model-filter", "dropdown" ,"brand");

            // draw series select
            const seriesDropdown = new Select("series", "series", "series");
            container.appendChild(seriesDropdown.getSelect());
            seriesDropdown.addOption("grx", "GRX");
            seriesDropdown.addOption("eagle", "Eagle");
            seriesDropdown.addOption("ultegra", "Ultegra");
            seriesDropdown.div.classList.add("model-filter", "dropdown", "series");
            

            // draw ratio select
            const gearRatio = new Select("ratio", "ratio", "ratio");
            container.appendChild(gearRatio.getSelect());
            gearRatio.addOption("1x11", "1x11");
            gearRatio.addOption("1x12", "1x12");
            gearRatio.addOption("2x11", "2x11");
            gearRatio.div.classList.add("model-filter", "dropdown" , "ratio");

            // button "reset filters"
            const resetModelFilter = new Button("reset filter", "reset-model-filter", "reset-model-filter");
            const button = resetModelFilter.buildButton()
            container.appendChild(button);

            
        }
    },
    header_button_custom: {
        heading: "Custom Gear comparison",
        init: function () {

        }
    },
    header_button_cassettes: {
        heading: "Cassettes in database",
        init: function () {
            
        }
    },
    header_button_cranksets: {
        heading: "Cranksets in database",
        init: function () {
            
        }
    },
    header_button_faq: {
        heading: "FAQ",
        init: function () {
            
        }
    },
    header_button_about: {
        heading: "About",
        init: function () {
            
        }
    }
};

// Get all header buttons
const allHeaderButtons = document.querySelectorAll('[id^="header_button"]');

// Add same class to all header buttons
function sameCSSforAllButtons () {
    const allHeaderButtons = document.querySelectorAll('[id^="header_button"]');
    allHeaderButtons.forEach((button) => {
        button.className = 'header-button';
    });
}

allHeaderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // make all buttons inactive
        sameCSSforAllButtons()

        // mark this button as active:
        button.className = 'header-button-active';

        // Empty container
        cleanContainer();

        // Get actions associated with this button
        const action = buttonActions[button.id];
        // replace heading
        container.appendChild(new Heading(action.heading, "main-heading").buildHeading());
        // create #container content
        action.init();    
    
    })
});


// Click button "by brand" on first page load

document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('#header_button_model');
    if (firstButton) {
        firstButton.click();
    }
})






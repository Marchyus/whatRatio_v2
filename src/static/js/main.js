import { navBar } from "./drawDesignElements.js";
import "../css/main.css";
// import { Select } from "./designElements.js";






// Add NAV BAR
const header = document.querySelector('header');
header.appendChild(navBar);


// pseudo database
const buttonActions = {
    button_model: {
        heading: "Gear ratio comparison"
    },
    button_brand: {
        heading: "Custom Gear comparison"
    },
    button_cassettes: {
        heading: "Cassettes in database"
    },
    button_cranksets: {
        heading: "Custom Gear comparison"
    },
    button_faq: {
        heading: "Custom Gear comparison"
    },
    button_about: {
        heading: "Custom Gear comparison"
    }
};

// Add event listeners to buttons
const allHeaderButtons = document.querySelectorAll('.header-button');
allHeaderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        console.log(buttonActions[button.id]['heading'])
    })
});

// move to functions
// add dropdowns for brand

// Locate container
const container = document.querySelector('#container');

class Select {
    constructor (labelText, name, id) {
        this.labelText = labelText;
        this.name = name;
        this.id = id;
        // Build up label element
        this.label = document.createElement('label');
        this.label.innerText = this.labelText;
        this.label.setAttribute('for', this.id);

        // Build up select
        this.select = document.createElement('select');
        this.select.setAttribute('id', this.id);
        this.select.setAttribute('name', this.name);
    }

    // return DIV with label+select inside
    getSelect () {
        const div = document.createElement('div');
        div.appendChild(this.label);
        div.appendChild(this.select);

        return div;
    }

    addOption (optionValue, optionText) {
        // construct option
        const option = document.createElement('option');
        option.setAttribute('value', optionValue);
        option.innerText = optionText;

        // add option to the select
        this.select.appendChild(option);
    }
}


const brandDropdown = new Select("(optional) Brand", "brand", "brand").getSelect();
container.appendChild(brandDropdown);
brandDropdown.addOption("Shimano", "shimano")
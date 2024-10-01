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
            const resetModelFilter = new Button("reset filter", "model-filter-reset", "model-filter-reset");
            const buttonReset = resetModelFilter.buildButton();
            container.appendChild(buttonReset);

            // dropdown with cassette list
            const allCassettes = new Select("cassettes", "all-cassettes", "all-cassettes");
            container.appendChild(allCassettes.getSelect());
            allCassettes.addOption("ca50", "CS-G105 11-38T");
            allCassettes.addOption("ca51", "CS-H083 12-46T");
            allCassettes.addOption("ca52", "CS-H083 11-42T");
            allCassettes.div.classList.add("model-filter", "dropdown" ,"all-cassettes");

            // dropdown with crankset list
            const allCranksets = new Select("cranksets", "all-cranksets", "all-cranksets");
            container.appendChild(allCranksets.getSelect());
            allCranksets.addOption("cr15", "FC-RX820-1 42T");
            allCranksets.addOption("cr16", "FC-RX820-2 31,48T");
            allCranksets.addOption("cr17", "FC-RS200 34,46T");
            allCranksets.div.classList.add("model-filter", "dropdown" ,"all-cranksets");

            // button "Add to graph"
            const addToGraph = new Button("Add to Graph", "model-filter-addtograph", "model-filter-addtograph");
            const buttonAddToGraph = addToGraph.buildButton();
            container.appendChild(buttonAddToGraph);
            
        }
    },
    header_button_custom: {
        heading: "Custom Gear comparison",
        cssClassList: 'container_custom',
        init: function () {
            // apply css
            container.className =  '';
            container.classList.add(this.cssClassList);

            // semi-global local database for custom gears
            let customGearDB = {}

            // button "add set"
            const buttonAddCustom = document.createElement('button');
            buttonAddCustom.classList.add("add-custom-gearset-btn")
            buttonAddCustom.textContent = "add set";
            container.appendChild(buttonAddCustom);

            const addCustomGearsetDialog = document.querySelector('#dialog-add-gearset');
            buttonAddCustom.addEventListener('click', () => {
                addCustomGearsetDialog.showModal();
            })

            const buttonAdd = document.querySelector('#add-custom');
            buttonAdd.addEventListener('click', (event) => {
                event.preventDefault();

                let frontChainrings = document.querySelector('#gears-front');
                let rearChainrings = document.querySelector('#gears-back');

                function cleanRings(chainring) {
                    let value = chainring.value;

                    if (value.includes('-')) {
                        value = value.replace('-', ',');
                    }

                    value = value.split(',');

                    value = value.map(ring => ring.trim())

                    const isValidNumber = (ring) => !isNaN(ring) && ring != '';

                    if (!value.every(isValidNumber)) {
                        alert("Enter only numbers separated by dash or comma!");
                        return false;
                    }

                    return value;
                }

                frontChainrings = cleanRings(frontChainrings);
                rearChainrings = cleanRings(rearChainrings);

                if (frontChainrings && rearChainrings) {
                    let newKey = undefined;
                    (Object.keys(customGearDB).length > 0) ? newKey = Math.max(...Object.keys(customGearDB).map(Number)) + 1 : newKey = 1;
                    customGearDB[newKey] = {front: frontChainrings, rear: rearChainrings};
                    // console.log(newKey);
                    // console.log(customGearDB);
                }

                const makeCustomGearList = function (customGearDB) {
                    // get current custom gear list
                    const currentList = document.querySelector('#custom-gear-list');
                    // if list exists - destroy it
                    if(currentList) {
                        currentList.remove();
                    }
                    // container to hold all custom gears
                    const customGearContainer = document.createElement('div');
                    customGearContainer.setAttribute('id', 'custom-gear-list');
                    
                    // header for virtual table of custom gears
                    const customGearHeader = document.createElement('div');
                    const customGearHeaderNo = document.createElement('div');
                    customGearHeaderNo.innerText = '#';
                    const customGearHeaderFront = document.createElement('div');
                    customGearHeaderFront.innerText = 'Front chainring(s)';
                    const customGearHeaderRear = document.createElement('div');
                    customGearHeaderRear.innerText = 'Rear chainring(s)';

                    // add header together
                    const mainContainer = document.querySelector('#container');
                    mainContainer.appendChild(customGearContainer);
                    customGearContainer.appendChild(customGearHeader);
                    customGearHeader.append(customGearHeaderNo);
                    customGearHeader.append(customGearHeaderFront);
                    customGearHeader.append(customGearHeaderRear);

                    // add in custom gears
                    Object.keys(customGearDB).forEach((set) => {
                        // single div to hold custom container
                        const customGear = document.createElement('div');
                        // custom gear details
                        const customGearNo = document.createElement('div');
                        customGearNo.innerText = set;
                        const customGearFront = document.createElement('div');
                        customGearFront.innerText = customGearDB[set].front;
                        console.log("Whole set: ", customGearDB[set]);
                        console.log("Front: ", customGearDB[set].front.join(','));
                        console.log("Rear: ", customGearDB[set].rear.join(','));

                    })
                }

                makeCustomGearList(customGearDB);




                console.log(frontChainrings, "#", rearChainrings)

                
            })
            

            const buttonCancel = document.querySelector('#add-custom-cancel');
            buttonCancel.addEventListener('click', () => {
                addCustomGearsetDialog.close();
            })


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




// Click one of header buttons on first load:
document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('#header_button_custom');
    if (firstButton) {
        firstButton.click();
    }
})






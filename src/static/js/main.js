import { navBar } from "./drawDesignElements.js";
import "../css/main.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/dialog.css";
import "../css/tabModel.css";
import "../css/tabCustom.css";
import gearDatabase from "../data/gears.json";

import { Button, Heading, Select } from "./designElements.js";

// NAV bar
const header = document.querySelector("header");
header.appendChild(navBar);

// set

// #Container
const container = document.querySelector("#container");

// function to clear container
const cleanContainer = function () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

// pseudo database
//TODO: move outside from main.js

const buttonActions = {
  header_button_model: {
    heading: "Compare ratios by brand",
    cssClassList: "container_model",
    init: function () {
      // apply css
      container.className = "";
      container.classList.add(this.cssClassList);
      // close down burger menu:
      const hanburgerMenu = document.querySelector("#dropdown-menu");
      hanburgerMenu.classList.remove("active");
      
      // Get brands, fill dropdown, overcomplicate it
      function populateBrands () {
        let readGearData = new Promise(function(resolve, reject) {
          let brand_keys = Object.keys(gearDatabase);
          let brand_set = brand_keys.map((brand) => {return {value: brand, text: gearDatabase[brand]["name"]}})
          resolve(brand_set);
        })
        readGearData.then((brand_set) => {
          const brandDropdown = new Select("brand", "brand", "brand");
          container.appendChild(brandDropdown.getSelect());

          brandDropdown.addOption("all", "-");
          brand_set.forEach(set => {
            brandDropdown.addOption(set.value, set.text);
          })
          brandDropdown.div.classList.add("model-filter", "dropdown", "brand");
        })
      }

      populateBrands();
      
      // Get series, fill dropdown, bit downcomplicate with map, bit overcomplicate with optGroup
      function populateSeries () {
        let readGearData = new Promise(function(resolve, reject) {
          let seriesSet = Object.keys(gearDatabase).map((brandkey) => {
            const brand = gearDatabase[brandkey];
            const seriesName = Object.keys(brand.series).map((seriesKey) => brand.series[seriesKey].name);
            return {
              brand: brand,
              series: seriesName
            }
          });
          console.log(seriesSet);
          resolve(seriesSet);
          
        })
        readGearData.then((seriesSet) => {
          const seriesDropdown = new Select("series", "series", "series");
          
          container.appendChild(seriesDropdown.getSelect());

          const seriesDropdownSelect = document.querySelector('#series')

          seriesDropdown.addOption("all", "-");
          
          
          seriesSet.forEach(set => {
            const optGroup = document.createElement('optgroup');
            optGroup.label = set.brand.name
            set.series.forEach((series) => {
              const option = document.createElement('option');
              option.value = series.toLowerCase();
              option.label = series;

              optGroup.appendChild(option);
            })

          seriesDropdownSelect.appendChild(optGroup);


            
          })
          seriesDropdown.div.classList.add("model-filter", "dropdown", "series");
        })
      }

      populateSeries();
      
      

      // draw ratio select
      const gearRatio = new Select("ratio", "ratio", "ratio");
      container.appendChild(gearRatio.getSelect());
      gearRatio.addOption("1x11", "1x11");
      gearRatio.addOption("1x12", "1x12");
      gearRatio.addOption("2x11", "2x11");
      gearRatio.div.classList.add("model-filter", "dropdown", "ratio");

      // button "reset filters"
      const resetModelFilter = new Button(
        "reset filter",
        "model-filter-reset",
        "model-filter-reset",
      );
      const buttonReset = resetModelFilter.buildButton();
      container.appendChild(buttonReset);

      // dropdown with cassette list
      const allCassettes = new Select(
        "cassette:",
        "all-cassettes",
        "all-cassettes",
      );
      container.appendChild(allCassettes.getSelect());
      allCassettes.addOption("ca50", "CS-G105 11-38T");
      allCassettes.addOption("ca51", "CS-H083 12-46T");
      allCassettes.addOption("ca52", "CS-H083 11-42T");
      allCassettes.div.classList.add(
        "model-filter",
        "dropdown",
        "all-cassettes",
      );

      // dropdown with crankset list
      const allCranksets = new Select(
        "crankset:",
        "all-cranksets",
        "all-cranksets",
      );
      container.appendChild(allCranksets.getSelect());
      allCranksets.addOption("cr15", "FC-RX820-1 42T");
      allCranksets.addOption("cr16", "FC-RX820-2 31,48T");
      allCranksets.addOption("cr17", "FC-RS200 34,46T");
      allCranksets.div.classList.add(
        "model-filter",
        "dropdown",
        "all-cranksets",
      );

      // button "Add to graph"
      const addToGraph = new Button(
        "Add to Graph",
        "model-filter-addtograph",
        "model-filter-addtograph",
      );
      const buttonAddToGraph = addToGraph.buildButton();
      container.appendChild(buttonAddToGraph);
    },
  },
  header_button_custom: {
    heading: "Custom Gear comparison",
    cssClassList: "container_custom",
    init: function () {
      // apply css
      container.className = "";
      container.classList.add(this.cssClassList);

      // close down burger menu:
      const hanburgerMenu = document.querySelector("#dropdown-menu");
      hanburgerMenu.classList.remove("active");

      // semi-global local database with custom gears
      let customGearDB = {};

      const makeCustomGearList = function (customGearDB) {
        // get current custom gear list
        const currentList = document.querySelector("#custom-gear-list");
        // if list exists - destroy it
        if (currentList) {
          currentList.remove();
        }
        // container to hold all custom gears
        const customGearContainer = document.createElement("div");
        customGearContainer.setAttribute("id", "custom-gear-list");

        // custom gears container -> main container
        const mainContainer = document.querySelector("#container");
        mainContainer.appendChild(customGearContainer);

        // add in custom gears
        Object.keys(customGearDB).forEach((set) => {
          // single div to hold single gear set
          const customGear = document.createElement("div");
          customGear.setAttribute("id", `custom-gear-${set}`);
          // gear #
          const customGearNo = document.createElement("div");
          customGearNo.innerText = `#${set}:`;
          // gears front
          const customGearFront = document.createElement("div");
          customGearFront.classList.add("front-gear");
          customGearFront.innerText = customGearDB[set].front.join("-");
          customGearFront.title = "front chainring";
          // gears rear
          const customGearRear = document.createElement("div");
          customGearRear.classList.add("rear-gear");
          customGearRear.innerText = customGearDB[set].rear.join("-");
          customGearRear.title = "rear chainring";

          // button to delete individual row
          const deleteButton = document.createElement("button");
          deleteButton.classList = "delete-button";
          deleteButton.preventDefault;
          deleteButton.textContent = "x";
          deleteButton.title = "remove";
          deleteButton.addEventListener("click", () => {
            delete customGearDB[set];
            customGear.remove();
            // store values in localStorage
            const gearRatiosString = JSON.stringify(customGearDB);
            localStorage.setItem("gearRatios", gearRatiosString);
          });

          // values all together
          customGear.appendChild(deleteButton);
          customGear.appendChild(customGearNo);
          customGear.appendChild(customGearFront);
          customGear.appendChild(customGearRear);

          // add custom gear into virtual table
          customGearContainer.appendChild(customGear);
        });
      };

      // get data from localStorage
      const storedGearRatios = localStorage.getItem("gearRatios");
      if (storedGearRatios) {
        customGearDB = JSON.parse(storedGearRatios);
        makeCustomGearList(customGearDB);
      }

      // button "add set"
      const buttonAddCustom = document.createElement("button");
      buttonAddCustom.classList.add("add-custom-gearset-btn");
      buttonAddCustom.textContent = "add set";
      container.appendChild(buttonAddCustom);

      const addCustomGearsetDialog = document.querySelector(
        "#dialog-add-gearset",
      );
      buttonAddCustom.addEventListener("click", () => {
        addCustomGearsetDialog.showModal();
      });

      const buttonAdd = document.querySelector("#add-custom");
      buttonAdd.addEventListener("click", (event) => {
        event.preventDefault();

        let frontChainrings = document.querySelector("#gears-front");
        let rearChainrings = document.querySelector("#gears-back");

        function validateGearsetInput(input) {
          const validPattern = /^(\d+([,-]\s?\d+)*)$/;

          if (validPattern.test(input.value)) {
            return true;
          } else {
            input.setCustomValidity(
              "only numbers separated by comma or dash (, -)",
            );
            input.reportValidity();
          }
        }

        function inputToArray(input) {
          // extract value from input
          let value = input.value;
          // convert dash to comma
          value = value.replace("-", ",");
          // split into array
          value = value.split(",");
          // trim empty space around array values
          value = value.map((value) => value.trim());
          // remove empty values
          value = value.filter((gear) => gear !== "");

          return value;
        }

        if (
          validateGearsetInput(frontChainrings) &&
          validateGearsetInput(rearChainrings)
        ) {
          let newKey = undefined;
          Object.keys(customGearDB).length > 0
            ? (newKey = Math.max(...Object.keys(customGearDB).map(Number)) + 1)
            : (newKey = 1);
          customGearDB[newKey] = {
            front: inputToArray(frontChainrings),
            rear: inputToArray(rearChainrings),
          };
        }

        makeCustomGearList(customGearDB);
        console.log(customGearDB);

        // store values in localStorage
        const gearRatiosString = JSON.stringify(customGearDB);
        localStorage.setItem("gearRatios", gearRatiosString);
      });

      const buttonCancel = document.querySelector("#add-custom-cancel");
      buttonCancel.addEventListener("click", () => {
        addCustomGearsetDialog.close();
      });
    },
  },
  header_button_cassettes: {
    heading: "Cassettes in database",
    init: function () {},
  },
  header_button_cranksets: {
    heading: "Cranksets in database",
    init: function () {},
  },
  // header_button_faq: {
  //   heading: "FAQ",
  //   init: function () {},
  // },
  header_button_about: {
    heading: "About",
    init: function () {},
  },
};

// Get all header buttons
const allHeaderButtons = document.querySelectorAll('[id^="header_button"]');

// Add same class to all header buttons
function sameCSSforAllButtons() {
  const allHeaderButtons = document.querySelectorAll('[id^="header_button"]');
  allHeaderButtons.forEach((button) => {
    button.className = "header-button";
  });
}

allHeaderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // make all buttons inactive
    sameCSSforAllButtons();

    // mark this button as active:
    button.className = "header-button-active";

    // Empty container
    cleanContainer();

    // Get actions associated with this button
    const action = buttonActions[button.id];
    // replace heading
    container.appendChild(
      new Heading(action.heading, "main-heading").buildHeading(),
    );
    // create #container content
    action.init();
  });
});

// Click one of header buttons on first load:
document.addEventListener("DOMContentLoaded", () => {
  const firstButton = document.querySelector("#header_button_model");
  if (firstButton) {
    firstButton.click();
  }
});

document.querySelector(".icon").addEventListener("click", function () {
  var dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.classList.toggle("active");
});

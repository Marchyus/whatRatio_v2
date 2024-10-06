(()=>{"use strict";var n={438:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"#dialog-add-gearset {\n    border: none;\n    box-sizing: border-box;\n    position: fixed;\n    /* height: 20vh;\n    width: 45vw; */\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 4px 8px rgba(124, 123, 123, 0.2);\n    align-content: center;\n\n}\n\n#dialog-add-gearset-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n.dialog-heading {\n    display: flex;\n    justify-content: space-between;\n    gap: 1%;\n    padding: 1%;\n}\n\n.dialog-heading-text {\n    color: var(--color-darkest);\n}\n\n.dialog-heading-text-alert {\n    color: var(--color-accent);\n}\n\n.dialog-buttons {\n    display: flex;\n    gap: 1%;\n    padding: 1%;\n}\n\n.dialog-buttons > button {\n    flex: 1;\n}","",{version:3,sources:["webpack://./src/static/css/dialog.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,sBAAsB;IACtB,eAAe;IACf;kBACc;IACd,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,8CAA8C;IAC9C,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,mCAAmC;IACnC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,OAAO;IACP,WAAW;AACf;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,OAAO;IACP,WAAW;AACf;;AAEA;IACI,OAAO;AACX",sourcesContent:["#dialog-add-gearset {\n    border: none;\n    box-sizing: border-box;\n    position: fixed;\n    /* height: 20vh;\n    width: 45vw; */\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 4px 8px rgba(124, 123, 123, 0.2);\n    align-content: center;\n\n}\n\n#dialog-add-gearset-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 2fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n.dialog-heading {\n    display: flex;\n    justify-content: space-between;\n    gap: 1%;\n    padding: 1%;\n}\n\n.dialog-heading-text {\n    color: var(--color-darkest);\n}\n\n.dialog-heading-text-alert {\n    color: var(--color-accent);\n}\n\n.dialog-buttons {\n    display: flex;\n    gap: 1%;\n    padding: 1%;\n}\n\n.dialog-buttons > button {\n    flex: 1;\n}"],sourceRoot:""}]);const s=i},687:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20%;\n}\n\n\nfooter {\n    background: var(--color-middle);\n    padding: 1% 10% 1% 10%;\n}","",{version:3,sources:["webpack://./src/static/css/footer.css"],names:[],mappings:"AAAA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;;AAGA;IACI,+BAA+B;IAC/B,sBAAsB;AAC1B",sourcesContent:["footer {\r\n    grid-area: footer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20%;\r\n}\r\n\r\n\r\nfooter {\r\n    background: var(--color-middle);\r\n    padding: 1% 10% 1% 10%;\r\n}"],sourceRoot:""}]);const s=i},757:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"\nheader {\n    width: 100%;\n    grid-area: header;\n    padding-top: 1%;\n    background-color: var(--color-middle);\n}\n\n.header-buttons {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    flex-wrap: wrap;\n    gap: 3%;\n}\n\n/* .header-buttons> button:nth-child(3) {\n     margin-left: 10%;\n\n} */\n\n.dropdown-menu {\n    margin-left: 10%;\n    display: flex;\n    gap: 3%;\n}\n\n\n\n.header-button {\n    border: 1px solid var(--color-darker);\n    border-radius: 25% 25% 0 0;\n    /* border-bottom-left-radius: 0.75rem;\n    border-bottom-right-radius: 0.75rem; */\n    background-color: var(--color-darker);\n    color: var(--color-light);\n}\n\n.header-button-active {\n    border: 1px solid var(--color-light);\n    border-radius: 25% 25% 0 0;\n    /* border-bottom-left-radius: 0.75rem;\n    border-bottom-right-radius: 0.75rem; */\n    background-color: var(--color-light);\n    color: var(--color-darker);\n}\n\n.header-button:hover {\n    background-color: var(--color-light);\n    color: var(--color-darkest);\n    border: 1px solid var(--color-darker);\n    cursor: pointer;\n}\n\n.icon {\n    display: none;\n}\n\n@media screen and (max-width: 700px){\n    .icon {\n        display: block;\n        float: right;\n        color: var(--color-darkest);\n        align-self: center;\n        font-size: 1.8rem;\n        margin-left: 10%;\n    }\n\n    .dropdown-menu\n    {\n        display: none;\n    }\n   \n\n    .dropdown-menu.active {\n        display: flex;\n        margin-top: 1%;\n    }\n}","",{version:3,sources:["webpack://./src/static/css/header.css"],names:[],mappings:";AACA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;IACf,OAAO;AACX;;AAEA;;;GAGG;;AAEH;IACI,gBAAgB;IAChB,aAAa;IACb,OAAO;AACX;;;;AAIA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B;0CACsC;IACtC,qCAAqC;IACrC,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B;0CACsC;IACtC,oCAAoC;IACpC,0BAA0B;AAC9B;;AAEA;IACI,oCAAoC;IACpC,2BAA2B;IAC3B,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,cAAc;QACd,YAAY;QACZ,2BAA2B;QAC3B,kBAAkB;QAClB,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;;QAEI,aAAa;IACjB;;;IAGA;QACI,aAAa;QACb,cAAc;IAClB;AACJ",sourcesContent:["\r\nheader {\r\n    width: 100%;\r\n    grid-area: header;\r\n    padding-top: 1%;\r\n    background-color: var(--color-middle);\r\n}\r\n\r\n.header-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    flex-wrap: wrap;\r\n    gap: 3%;\r\n}\r\n\r\n/* .header-buttons> button:nth-child(3) {\r\n     margin-left: 10%;\r\n\r\n} */\r\n\r\n.dropdown-menu {\r\n    margin-left: 10%;\r\n    display: flex;\r\n    gap: 3%;\r\n}\r\n\r\n\r\n\r\n.header-button {\r\n    border: 1px solid var(--color-darker);\r\n    border-radius: 25% 25% 0 0;\r\n    /* border-bottom-left-radius: 0.75rem;\r\n    border-bottom-right-radius: 0.75rem; */\r\n    background-color: var(--color-darker);\r\n    color: var(--color-light);\r\n}\r\n\r\n.header-button-active {\r\n    border: 1px solid var(--color-light);\r\n    border-radius: 25% 25% 0 0;\r\n    /* border-bottom-left-radius: 0.75rem;\r\n    border-bottom-right-radius: 0.75rem; */\r\n    background-color: var(--color-light);\r\n    color: var(--color-darker);\r\n}\r\n\r\n.header-button:hover {\r\n    background-color: var(--color-light);\r\n    color: var(--color-darkest);\r\n    border: 1px solid var(--color-darker);\r\n    cursor: pointer;\r\n}\r\n\r\n.icon {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n    .icon {\r\n        display: block;\r\n        float: right;\r\n        color: var(--color-darkest);\r\n        align-self: center;\r\n        font-size: 1.8rem;\r\n        margin-left: 10%;\r\n    }\r\n\r\n    .dropdown-menu\r\n    {\r\n        display: none;\r\n    }\r\n   \r\n\r\n    .dropdown-menu.active {\r\n        display: flex;\r\n        margin-top: 1%;\r\n    }\r\n}"],sourceRoot:""}]);const s=i},989:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,':root {\n    /* Color Theme Swatches in HSLA */\n    --color-darkest: hsla(189, 68%, 8%, 1);\n    --color-darker: hsla(191, 25%, 36%, 1);\n    --color-middle: hsla(185, 28%, 65%, 1);\n    --color-accent: hsla(39, 33%, 26%, 1);\n    --color-light: hsla(0, 0%, 95%, 1);\n    }\n\n/* Fonts */\n.atkinson-hyperlegible-regular {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n  }\n  \n  .atkinson-hyperlegible-bold {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 700;\n    font-style: normal;\n  }\n  \n  .atkinson-hyperlegible-regular-italic {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 400;\n    font-style: italic;\n  }\n  \n  .atkinson-hyperlegible-bold-italic {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 700;\n    font-style: italic;\n  }\n  \n\n/* POSITIONING */\n/* get rid of default styles */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n}\n\n/* positioning */\nbody {\n    display: grid;\n    min-height: 100vh;\n    grid-template-areas: "header"\n                         "container"\n                         "footer";\n    grid-template-rows: auto 15fr auto;\n}\n\nbody {\n    background: var(--color-light);\n}\n\n\n#container {\n    padding: 1% 10% 0 5%;\n    grid-area: container;\n}\n\n\n\n\nbutton {\n    box-sizing: border-box;\n    padding: 1vw;\n    font-size: 1.2rem;\n    text-wrap: nowrap;\n}\n\n\n\n/* shared between all #containers */\n.main-heading {\n    grid-area: heading;\n    font-size: 2rem;\n    padding: 1%;\n}\n',"",{version:3,sources:["webpack://./src/static/css/main.css"],names:[],mappings:"AAAA;IACI,iCAAiC;IACjC,sCAAsC;IACtC,sCAAsC;IACtC,sCAAsC;IACtC,qCAAqC;IACrC,kCAAkC;IAClC;;AAEJ,UAAU;AACV;IACI,gDAAgD;IAChD,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,gDAAgD;IAChD,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,gDAAgD;IAChD,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,gDAAgD;IAChD,gBAAgB;IAChB,kBAAkB;EACpB;;;AAGF,gBAAgB;AAChB,8BAA8B;AAC9B;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gDAAgD;AACpD;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,iBAAiB;IACjB;;iCAE6B;IAC7B,kCAAkC;AACtC;;AAEA;IACI,8BAA8B;AAClC;;;AAGA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;;;;AAKA;IACI,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;AACrB;;;;AAIA,mCAAmC;AACnC;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;AACf",sourcesContent:[':root {\n    /* Color Theme Swatches in HSLA */\n    --color-darkest: hsla(189, 68%, 8%, 1);\n    --color-darker: hsla(191, 25%, 36%, 1);\n    --color-middle: hsla(185, 28%, 65%, 1);\n    --color-accent: hsla(39, 33%, 26%, 1);\n    --color-light: hsla(0, 0%, 95%, 1);\n    }\n\n/* Fonts */\n.atkinson-hyperlegible-regular {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n  }\n  \n  .atkinson-hyperlegible-bold {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 700;\n    font-style: normal;\n  }\n  \n  .atkinson-hyperlegible-regular-italic {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 400;\n    font-style: italic;\n  }\n  \n  .atkinson-hyperlegible-bold-italic {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n    font-weight: 700;\n    font-style: italic;\n  }\n  \n\n/* POSITIONING */\n/* get rid of default styles */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    font-family: "Atkinson Hyperlegible", sans-serif;\n}\n\n/* positioning */\nbody {\n    display: grid;\n    min-height: 100vh;\n    grid-template-areas: "header"\n                         "container"\n                         "footer";\n    grid-template-rows: auto 15fr auto;\n}\n\nbody {\n    background: var(--color-light);\n}\n\n\n#container {\n    padding: 1% 10% 0 5%;\n    grid-area: container;\n}\n\n\n\n\nbutton {\n    box-sizing: border-box;\n    padding: 1vw;\n    font-size: 1.2rem;\n    text-wrap: nowrap;\n}\n\n\n\n/* shared between all #containers */\n.main-heading {\n    grid-area: heading;\n    font-size: 2rem;\n    padding: 1%;\n}\n'],sourceRoot:""}]);const s=i},756:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'.add-custom-gearset-btn {\n    border: 1px solid var(--color-darker);\n    border-radius: 1rem;\n    padding-left: 3%;\n    padding-right: 3%;\n    color: var(--color-darkest);\n    background: var(--color-middle);\n}\n\n.add-custom-gearset-btn:hover {\n    border: 1px solid var(--color-light);\n    background: var(--color-darker);\n    color: var(--color-light);\n    cursor: pointer;\n}\n\n.container_custom {\n    display: grid;\n    grid-template-areas: "heading heading heading heading button "\n                         "table   table   table   table   table  "\n                         "graphs  graphs  graphs  graphs  graphs ";\n    grid-auto-rows: auto auto 1fr;\n    gap: 1%;\n}\n\n.add-custom-gearset-btn {\n    grid-area: button;\n}\n/* gear list as a whole - grid */\n#custom-gear-list {\n    grid-area: table;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1%;\n    --width-no: 5vw;\n    --width-front: 10vw;\n    --width-back: 20vw;\n    \n    \n}\n/* individual row - also grid */\n#custom-gear-list > div {\n    padding: 1%;\n    display: grid;\n    grid-template-columns: 3vw 5vw 20vw 30vw;\n    gap: 1%;\n    overflow: scroll;\n    border: 1px solid black;\n    align-items: center;\n}\n\nbutton.delete-button {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background: none;\n    color: red;    \n    cursor: pointer;\n    align-self: center;\n    justify-self: center;\n}\n',"",{version:3,sources:["webpack://./src/static/css/tabCustom.css"],names:[],mappings:"AAAA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;IACpC,+BAA+B;IAC/B,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb;;kEAE8D;IAC9D,6BAA6B;IAC7B,OAAO;AACX;;AAEA;IACI,iBAAiB;AACrB;AACA,gCAAgC;AAChC;IACI,gBAAgB;IAChB,aAAa;IACb,0BAA0B;IAC1B,OAAO;IACP,eAAe;IACf,mBAAmB;IACnB,kBAAkB;;;AAGtB;AACA,+BAA+B;AAC/B;IACI,WAAW;IACX,aAAa;IACb,wCAAwC;IACxC,OAAO;IACP,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,oBAAoB;AACxB",sourcesContent:['.add-custom-gearset-btn {\n    border: 1px solid var(--color-darker);\n    border-radius: 1rem;\n    padding-left: 3%;\n    padding-right: 3%;\n    color: var(--color-darkest);\n    background: var(--color-middle);\n}\n\n.add-custom-gearset-btn:hover {\n    border: 1px solid var(--color-light);\n    background: var(--color-darker);\n    color: var(--color-light);\n    cursor: pointer;\n}\n\n.container_custom {\n    display: grid;\n    grid-template-areas: "heading heading heading heading button "\n                         "table   table   table   table   table  "\n                         "graphs  graphs  graphs  graphs  graphs ";\n    grid-auto-rows: auto auto 1fr;\n    gap: 1%;\n}\n\n.add-custom-gearset-btn {\n    grid-area: button;\n}\n/* gear list as a whole - grid */\n#custom-gear-list {\n    grid-area: table;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1%;\n    --width-no: 5vw;\n    --width-front: 10vw;\n    --width-back: 20vw;\n    \n    \n}\n/* individual row - also grid */\n#custom-gear-list > div {\n    padding: 1%;\n    display: grid;\n    grid-template-columns: 3vw 5vw 20vw 30vw;\n    gap: 1%;\n    overflow: scroll;\n    border: 1px solid black;\n    align-items: center;\n}\n\nbutton.delete-button {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background: none;\n    color: red;    \n    cursor: pointer;\n    align-self: center;\n    justify-self: center;\n}\n'],sourceRoot:""}]);const s=i},614:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'.container_model {\n    display: grid;\n    grid-template-areas: "heading          heading          heading          heading          empty   "\n                         "brand            series           ratio            buttonreset      selected"\n                         "dropdowncassette dropdowncassette dropdowncrankset dropdowncrankset selected"\n                         "teethscassette   teethscass1ette  teethscrankset   teethscrankset   selected"\n                         "gt               grt              zz               buttonaddtograph asdad   ";\n    grid-template-rows: 3rem 3rem 3rem 2rem 2rem;\n    justify-items: center;\n    align-items: center;\n}\n\n.model-filter.dropdown.brand {\n    grid-area: brand;\n}\n\n.model-filter.dropdown.series {\n    grid-area: series;\n}\n\n.model-filter.dropdown.ratio {\n    grid-area: ratio;\n}\n\n.model-filter-reset {\n    grid-area: buttonreset;\n}\n\n.all-cassettes {\n    grid-area: dropdowncassette;\n}\n\n.all-cranksets {\n    grid-area: dropdowncrankset;\n}\n\n.model-filter-addtograph {\n    grid-area: buttonaddtograph;\n}',"",{version:3,sources:["webpack://./src/static/css/tabModel.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb;;;;uGAImG;IACnG,4CAA4C;IAC5C,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B",sourcesContent:['.container_model {\n    display: grid;\n    grid-template-areas: "heading          heading          heading          heading          empty   "\n                         "brand            series           ratio            buttonreset      selected"\n                         "dropdowncassette dropdowncassette dropdowncrankset dropdowncrankset selected"\n                         "teethscassette   teethscass1ette  teethscrankset   teethscrankset   selected"\n                         "gt               grt              zz               buttonaddtograph asdad   ";\n    grid-template-rows: 3rem 3rem 3rem 2rem 2rem;\n    justify-items: center;\n    align-items: center;\n}\n\n.model-filter.dropdown.brand {\n    grid-area: brand;\n}\n\n.model-filter.dropdown.series {\n    grid-area: series;\n}\n\n.model-filter.dropdown.ratio {\n    grid-area: ratio;\n}\n\n.model-filter-reset {\n    grid-area: buttonreset;\n}\n\n.all-cassettes {\n    grid-area: dropdowncassette;\n}\n\n.all-cranksets {\n    grid-area: dropdowncrankset;\n}\n\n.model-filter-addtograph {\n    grid-area: buttonaddtograph;\n}'],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var d=n[s],A=r.base?d[0]+r.base:d[0],l=o[A]||0,c="".concat(A," ").concat(l);o[A]=l+1;var u=t(c),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=a(g,r);r.byIndex=s,e.splice(s,0,{identifier:c,updater:p,references:1})}i.push(c)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var d=r(n,a),A=0;A<o.length;A++){var l=t(o[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;class r{constructor(n,e,t=""){this.textContent=n,this.id=e,this.classList=t,this.button=document.createElement("button")}buildButton(){return this.button.textContent=this.textContent,this.button.id=this.id,this.classList&&this.button.classList.add(this.classList),this.button}addClass(n){this.button.classList.add(n)}removeClass(n){this.button.classList.remove(n)}removeClassAll(){this.button.className=""}}class a{constructor(n,e=""){this.headingText=n,this.className=e}buildHeading(){const n=document.createElement("div");return n.innerText=this.headingText,this.className&&n.classList.add(this.className),n}}class o{constructor(n,e,t){this.labelText=n,this.name=e,this.id=t,this.label=document.createElement("label"),this.label.innerText=this.labelText,this.label.setAttribute("for",this.id),this.div=document.createElement("div"),this.select=document.createElement("select"),this.select.setAttribute("id",this.id),this.select.setAttribute("name",this.name)}getSelect(){return this.div.appendChild(this.label),this.div.appendChild(this.select),this.div}addOption(n,e){const t=document.createElement("option");t.setAttribute("value",n),t.innerText=e,this.select.appendChild(t)}}const i=document.createElement("nav");i.classList.add("header-buttons");const s=new r("By model","header_button_model","header-button"),d=new r("Custom","header_button_custom","header-button"),A=new r("Cassettes","header_button_cassettes","header-button"),l=new r("Cranksets","header_button_cranksets","header-button"),c=new r("FAQ","header_button_faq","header-button"),u=new r("About","header_button_about","header-button"),g=document.createElement("div");g.classList="dropdown-menu",g.id="dropdown-menu",g.appendChild(A.buildButton()),g.appendChild(l.buildButton()),g.appendChild(c.buildButton()),g.appendChild(u.buildButton()),i.appendChild(s.buildButton()),i.appendChild(d.buildButton()),i.appendChild(g);const p=document.createElement("a");p.href="javascript:void(0);",p.classList="icon",p.onclick="myFunction()";const C=document.createElement("i");C.classList="fa fa-bars",p.appendChild(C),i.appendChild(p);const m=document.querySelector("footer"),h=(new class{constructor(){this.dateNow=new Date,this.currentYear=this.dateNow.getFullYear()}getYear(){const n=document.createElement("div");return n.innerText=this.currentYear,n}}).getYear(),b=document.createElement("div");b.innerText="Marchyus",m.appendChild(h),m.appendChild(b);var f=t(72),B=t.n(f),I=t(825),v=t.n(I),y=t(659),w=t.n(y),k=t(56),x=t.n(k),E=t(540),S=t.n(E),O=t(113),T=t.n(O),L=t(989),q={};q.styleTagTransform=T(),q.setAttributes=x(),q.insert=w().bind(null,"head"),q.domAPI=v(),q.insertStyleElement=S(),B()(L.A,q),L.A&&L.A.locals&&L.A.locals;var _=t(757),j={};j.styleTagTransform=T(),j.setAttributes=x(),j.insert=w().bind(null,"head"),j.domAPI=v(),j.insertStyleElement=S(),B()(_.A,j),_.A&&_.A.locals&&_.A.locals;var D=t(687),z={};z.styleTagTransform=T(),z.setAttributes=x(),z.insert=w().bind(null,"head"),z.domAPI=v(),z.insertStyleElement=S(),B()(D.A,z),D.A&&D.A.locals&&D.A.locals;var N=t(438),H={};H.styleTagTransform=T(),H.setAttributes=x(),H.insert=w().bind(null,"head"),H.domAPI=v(),H.insertStyleElement=S(),B()(N.A,H),N.A&&N.A.locals&&N.A.locals;var G=t(614),P={};P.styleTagTransform=T(),P.setAttributes=x(),P.insert=w().bind(null,"head"),P.domAPI=v(),P.insertStyleElement=S(),B()(G.A,P),G.A&&G.A.locals&&G.A.locals;var Q=t(756),R={};R.styleTagTransform=T(),R.setAttributes=x(),R.insert=w().bind(null,"head"),R.domAPI=v(),R.insertStyleElement=S(),B()(Q.A,R),Q.A&&Q.A.locals&&Q.A.locals,document.querySelector("header").appendChild(i);const M=document.querySelector("#container"),U={header_button_model:{heading:"Compare ratios by brand",cssClassList:"container_model",init:function(){M.className="",M.classList.add(this.cssClassList);const n=new o("brand","brand","brand");M.appendChild(n.getSelect()),n.addOption("shimano","Shimano"),n.addOption("sram","Sram"),n.addOption("campagnolo","Campagnolo"),n.div.classList.add("model-filter","dropdown","brand");const e=new o("series","series","series");M.appendChild(e.getSelect()),e.addOption("grx","GRX"),e.addOption("eagle","Eagle"),e.addOption("ultegra","Ultegra"),e.div.classList.add("model-filter","dropdown","series");const t=new o("ratio","ratio","ratio");M.appendChild(t.getSelect()),t.addOption("1x11","1x11"),t.addOption("1x12","1x12"),t.addOption("2x11","2x11"),t.div.classList.add("model-filter","dropdown","ratio");const a=new r("reset filter","model-filter-reset","model-filter-reset").buildButton();M.appendChild(a);const i=new o("cassettes","all-cassettes","all-cassettes");M.appendChild(i.getSelect()),i.addOption("ca50","CS-G105 11-38T"),i.addOption("ca51","CS-H083 12-46T"),i.addOption("ca52","CS-H083 11-42T"),i.div.classList.add("model-filter","dropdown","all-cassettes");const s=new o("cranksets","all-cranksets","all-cranksets");M.appendChild(s.getSelect()),s.addOption("cr15","FC-RX820-1 42T"),s.addOption("cr16","FC-RX820-2 31,48T"),s.addOption("cr17","FC-RS200 34,46T"),s.div.classList.add("model-filter","dropdown","all-cranksets");const d=new r("Add to Graph","model-filter-addtograph","model-filter-addtograph").buildButton();M.appendChild(d)}},header_button_custom:{heading:"Custom Gear comparison",cssClassList:"container_custom",init:function(){M.className="",M.classList.add(this.cssClassList);let n={};const e=document.createElement("button");e.classList.add("add-custom-gearset-btn"),e.textContent="add set",M.appendChild(e);const t=document.querySelector("#dialog-add-gearset");e.addEventListener("click",(()=>{t.showModal()})),document.querySelector("#add-custom").addEventListener("click",(e=>{e.preventDefault();let t=document.querySelector("#gears-front"),r=document.querySelector("#gears-back");function a(n){if(/^(\d+([,\-]\s?\d+)*)$/.test(n.value))return!0;n.setCustomValidity("only numbers separated by comma or dash (, -)"),n.reportValidity()}function o(n){let e=n.value;return e=e.replace("-",","),e=e.split(","),e=e.map((n=>n.trim())),e=e.filter((n=>""!==e)),e}if(a(t)&&a(r)){let e;e=Object.keys(n).length>0?Math.max(...Object.keys(n).map(Number))+1:1,n[e]={front:o(t),rear:o(r)}}!function(n){const e=document.querySelector("#custom-gear-list");e&&e.remove();const t=document.createElement("div");t.setAttribute("id","custom-gear-list"),document.querySelector("#container").appendChild(t),Object.keys(n).forEach((e=>{const r=document.createElement("div");r.setAttribute("id",`custom-gear-${e}`);const a=document.createElement("div");a.innerText=`#${e}:`;const o=document.createElement("div");o.innerText=n[e].front.join(",");const i=document.createElement("div");i.innerText=n[e].rear.join(",");const s=document.createElement("button");s.classList="delete-button",s.preventDefault,s.textContent="x",s.addEventListener("click",(()=>{delete n[e],r.remove()})),r.appendChild(s),r.appendChild(a),r.appendChild(o),r.appendChild(i),t.appendChild(r)}))}(n)})),document.querySelector("#add-custom-cancel").addEventListener("click",(()=>{t.close()}))}},header_button_cassettes:{heading:"Cassettes in database",init:function(){}},header_button_cranksets:{heading:"Cranksets in database",init:function(){}},header_button_faq:{heading:"FAQ",init:function(){}},header_button_about:{heading:"About",init:function(){}}};document.querySelectorAll('[id^="header_button"]').forEach((n=>{n.addEventListener("click",(()=>{document.querySelectorAll('[id^="header_button"]').forEach((n=>{n.className="header-button"})),n.className="header-button-active",function(){for(;M.firstChild;)M.removeChild(M.firstChild)}();const e=U[n.id];M.appendChild(new a(e.heading,"main-heading").buildHeading()),e.init()}))})),document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector("#header_button_custom");n&&n.click()})),document.querySelector(".icon").addEventListener("click",(function(){document.getElementById("dropdown-menu").classList.toggle("active")}))})();
//# sourceMappingURL=main.js.map
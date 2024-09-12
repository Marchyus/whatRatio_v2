
// Buttons
class Button {
    constructor(textContent, id, className = ''){
        this.textContent = textContent;
        this.id = id;
        this.classList = className;
        this.button = document.createElement('button');
    }

    buildButton() {
        // const button = document.createElement('button');
        this.button.textContent = this.textContent;
        this.button.id = this.id;
        if (this.classList) {this.button.classList.add(this.classList)}
        return this.button;
    }

    
}

// footer elements
// date. Overkillm woiuld I use dates anywhere else than footer?
class Dates {

    constructor() {
        this.dateNow = new Date();
        this.currentYear = this.dateNow.getFullYear();
    }

    getYear() {
        const div = document.createElement('div');
        div.innerText = this.currentYear;
        return div;
    }
}



class Heading {
    constructor(headingText, className = '') {
        this.headingText = headingText;
        this.className = className;
    }

    buildHeading () {
        const div = document.createElement('div');
        div.innerText = this.headingText;
        if (this.className) {div.classList.add(this.className)}
        return div;
    }
}


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



export {Button, Dates, Heading, Select};
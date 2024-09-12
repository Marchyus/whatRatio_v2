
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
    constructor(headingText, classname = '') {
        this.headingText = headingText
    }

    buildHeading () {
        const div = document.createElement('div');
        div.innerText = this.headingText;
        return div;
    }
}





export {Button, Dates, Heading};
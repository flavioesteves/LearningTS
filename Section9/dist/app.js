"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Section 9 - Practice Time! Drag & Drop Project");
console.log(" --- Interface ---");
console.log("Validatable");
//Validation Implementation
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    return isValid;
}
console.log(" --- Decorators ---");
console.log("AutoBind");
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
console.log(" --- Classes ---");
console.log("ProjectInput");
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        //Validation future implementation
        if (validate({ value: enteredTitle, required: true, minLength: 5 }) &&
            validate({ value: enteredDescription, required: true, minLength: 5 }) &&
            validate({ value: enteredPeople, required: true, minLength: 5 }))
            if (enteredPeople.trim().length === 0 || enteredDescription.trim().length === 0 || enteredTitle.trim().length === 0) {
                alert("Invalid input try again!");
                return;
            }
        return [enteredTitle, enteredDescription, +enteredPeople];
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearInputs();
        }
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map
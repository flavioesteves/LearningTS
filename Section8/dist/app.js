"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("Section 8 - Decorators");
// 105 - A First Class Decorator
console.log("L105");
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Mac";
        console.log("Creating person objec...");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
//106 - Working with Decorator Factories
console.log("L106");
function FactoryLogger(logString) {
    console.log("Logger Factory");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "mac2";
        console.log("Creating person obj2 ...");
    }
};
Person2 = __decorate([
    FactoryLogger("Logging - Person 2")
], Person2);
const person2 = new Person2();
console.log(person2);
//107 - Building More Useful Decorators
console.log("L107");
function WithTemplate(template, hookId) {
    console.log("Template Factory");
    return function (constructor) {
        console.log("Rendering Template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person3 = class Person3 {
    constructor() {
        this.name = "mac3";
        console.log("Creating person obj3 ...");
    }
};
Person3 = __decorate([
    WithTemplate("<h1>My Person3 Object</h1>", "app")
], Person3);
const person3 = new Person3();
console.log(person3);
//108 - Adding Multiple Decorators
console.log("L108");
let Person4 = class Person4 {
    constructor() {
        this.name = "mac4";
        console.log("Creating person obj4 ...");
    }
};
Person4 = __decorate([
    FactoryLogger("Logging"),
    WithTemplate("<h1>My Person4 Object</h1>", "app")
], Person4);
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
//109 - Diving into Property Decorators
console.log("L109");
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
//110 - Accessor & Parameter Decorators
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameer decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//111 - When Do Decorators Execute?
//Decorators runs when the class is defined not when is instancied
const p1 = new Product("Book", 19);
const p2 = new Product("Book2", 29);
//112 - Returning (and changing) a Class in a class Decorator
console.log("L112");
function WithTemplate112(template, hookId) {
    console.log("Template Factory");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering Template 2");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person112 = class Person112 {
    constructor() {
        this.name = "Person112";
        console.log("Creating person L112 object");
    }
};
Person112 = __decorate([
    FactoryLogger("Logging"),
    WithTemplate112("<h1>My Person Object L112</h1>", "app")
], Person112);
const pers112 = new Person112();
//113 - Other Decorator Return Types
console.log("L113");
function Log113_2(target, name, descriptor) {
    console.log("Accessor decorator 113 2!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log113_3(target, name, descriptor) {
    console.log("Method decorator 113 3!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
//114 - Example: Creating an "Autobind Decorator"
console.log("L114");
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This Works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
//115 - Validation with Decorators - First Steps
//116. Validation with Decorators - Finished
console.log("L115, L116");
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop]; // "!!" converts into boolen operator
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value; // '+String' convert into number
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input, please try again!");
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map
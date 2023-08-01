console.log("Section 8 - Decorators");

// 105 - A First Class Decorator
console.log("L105")
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Mac";

  constructor() {
    console.log("Creating person objec...");

  }
}

const pers = new Person();
console.log(pers);


//106 - Working with Decorator Factories
console.log("L106")
function FactoryLogger(logString: string) {
  console.log("Logger Factory");

  return function(constructor: Function) {
    console.log(logString)
    console.log(constructor);
  }
}

@FactoryLogger("Logging - Person 2")
class Person2 {
  name = "mac2";
  constructor() {
    console.log("Creating person obj2 ...");
  }
}

const person2 = new Person2();
console.log(person2);


//107 - Building More Useful Decorators
console.log("L107");
function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function(constructor: any) {
    console.log("Rendering Template");

    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  }
}

@WithTemplate("<h1>My Person3 Object</h1>", "app")
class Person3 {
  name = "mac3";
  constructor() {
    console.log("Creating person obj3 ...");
  }
}

const person3 = new Person3();
console.log(person3);


//108 - Adding Multiple Decorators
console.log("L108");

@FactoryLogger("Logging")
@WithTemplate("<h1>My Person4 Object</h1>", "app")
class Person4 {
  name = "mac4";
  constructor() {
    console.log("Creating person obj4 ...");
  }
}

console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")


//109 - Diving into Property Decorators
console.log("L109");


function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}


//110 - Accessor & Parameter Decorators
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameer decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}


//111 - When Do Decorators Execute?
//Decorators runs when the class is defined not when is instancied
const p1 = new Product("Book", 19);
const p2 = new Product("Book2", 29);

//112 - Returning (and changing) a Class in a class Decorator
console.log("L112");
function WithTemplate112(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering Template 2");

        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    }
  };
}

@FactoryLogger("Logging")
@WithTemplate112("<h1>My Person Object L112</h1>", "app")
class Person112 {
  name = "Person112";
  constructor() {
    console.log("Creating person L112 object");
  }
}
const pers112 = new Person112();


//113 - Other Decorator Return Types
console.log("L113");
function Log113_2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator 113 2!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log113_3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("Method decorator 113 3!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//114 - Example: Creating an "Autobind Decorator"
console.log("L114");

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn
    },
  };
  return adjDescriptor;
}


class Printer {
  message = "This Works";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);


//115 - Validation with Decorators - First Steps
//116. Validation with Decorators - Finished
console.log("L115, L116");

interface ValidatorConfig {
  [property: string]: {
    [validatable: string]: string[] // ["required" "positive"]
  }
}

const registeredValidators: ValidatorConfig = {};


function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  };
}

function validate(obj: any) {
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
          isValid = isValid && !!obj[prop];// "!!" converts into boolen operator
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
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", event => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;// '+String' convert into number

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!")
    return;
  }
  console.log(createdCourse);
});


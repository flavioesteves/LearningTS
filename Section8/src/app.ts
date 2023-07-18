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

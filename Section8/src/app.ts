console.log("Section 8 - Decorators");

// 105 - A First Class Decorator
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


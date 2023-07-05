console.log("Section 6 - Advanced Typing Concepts")
//L83
type Admin = {
  name: string;
  priveleges: string[];
};


type Employee = {
  name: string;
  startDate: Date;
};

//Intersection Type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Mac",
  priveleges: ["create-server"],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
/*
 * Example on interfaces
 *
interface Admin {
  name: string;
  priveleges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

inteface ElevatedEmployee extends Employee, Admin {}

*/





//L84 - More on Type Guards
function add(a: Combinable, b: Combinable) {

  // this is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);


  // this is a type guard
  if ("priveleges" in emp) {
    console.log("Priveleges: " + emp.priveleges);
  }

  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);

  }

}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Manu", startDate: new Date() });


class Car {
  drive() {
    console.log("Driving...");
  }
}



class Truck {
  drive() {
    console.log("Driving a truck ...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}


type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // this is a type guard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);





//85 - Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });





//86 - Type Casting
const paragraph = document.querySelector("p");
const paragraphID = document.getElementById("message-output");

//Version 1 of typecasting
//const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
//userInputElement.value = "Hello There!";


//Version 2 of typecasting
const userInputElement2 = document.getElementById("user-input");

if (userInputElement2) {
  (userInputElement2 as HTMLInputElement).value = "Hi there!";
}





//87 - Index Properties
interface ErrorContainer {
  // { email: "Not a valid email", username: " Must start with a character" }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!"
};





//88 -  Function Overloads
function addOverload(a: number, b: number): number;
function addOverload(a: string, b: string): string;
function addOverload(a: string, b: number): string;
function addOverload(a: number, b: string): string;
function addOverload(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addOverload("Ma", "C");
result.split(" ");

const resultNumber = addOverload(10, 4);





//89 - Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Mac",
  job: { title: "CEO", description: "My own company" }
};

console.log(fetchedUserData?.job?.title);




//90 - Nullish Coalescing
const userInput = null;

// Set to default value if is "", undefined or nul
const storedDataAll = userInput || "DEFAULT"

// "??" operator only set to default value if the value is null or undefined, ignoring ""
const storedData = userInput ?? "DEFAULT";






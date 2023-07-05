"use strict";
var _a;
console.log("Section 6 - Advanced Typing Concepts");
const e1 = {
    name: "Mac",
    priveleges: ["create-server"],
    startDate: new Date(),
};
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
function add(a, b) {
    // this is a type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // this is a type guard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
    userInputElement2.value = "Hi there!";
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!"
};
function addOverload(a, b) {
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
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//90 - Nullish Coalescing
const userInput = null;
// Set to default value if is "", undefined or nul
const storedDataAll = userInput || "DEFAULT";
// "??" operator only set to default value if the value is null or undefined, ignoring ""
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
//# sourceMappingURL=app.js.map
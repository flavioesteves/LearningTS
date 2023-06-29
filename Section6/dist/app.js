"use strict";
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
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=app.js.map
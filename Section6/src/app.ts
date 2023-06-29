console.log("Section 6 - Advanced Typing Concepts")
//

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



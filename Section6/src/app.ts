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


//L84

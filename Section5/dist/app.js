"use strict";
//Lesson 59-64
class Department {
    //constructor(n: string) {
    // this.name = n;
    //}
    // Same as above declaration
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //public name: string;
        // private name: string;
        this.employees = []; //this  way this property is only accessable inside the class
    }
    //method added a dummy parameter "this: Department" for extra safety
    describe() {
        console.log(`Department: (${this.id}): ${this.name}`);
    }
    ;
    addEmployee(employee) {
        this.employees.push(employee);
    }
    ;
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('DP01', 'Accounting');
accounting.addEmployee('StudyTime');
accounting.addEmployee('Chloe');
accounting.name = 'Change via global access';
//accounting.employees[2] = 'Anna'; //this is to be avoided, to ensure that the property is no available outside the class, set the property "private". 
accounting.describe();
accounting.printEmployeeInfo();
//Example of this context, without "name" gives an error because of the dummy parameter 
//const accountingCopy = { name: 'some', describe: accounting.describe };
//accountingCopy.describe();
// ---------------------------------------- //
// Lesson 65
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const itDepartment = new ITDepartment('DP02', ['Mac']);
itDepartment.describe();
console.log(itDepartment);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }
}
const accountingDepartment = new AccountingDepartment('DP03', []);
accountingDepartment.addEmployee('Max');
accountingDepartment.addEmployee('Manu');
accountingDepartment.addReport('Report01');
accountingDepartment.addReport('Report02');
accountingDepartment.addReport('Report03');
accountingDepartment.addReport('Report04');
accountingDepartment.printReports();
accountingDepartment.printEmployeeInfo();
//# sourceMappingURL=app.js.map
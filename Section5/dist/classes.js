"use strict";
//Lesson 59-64
class Department {
    //constructor(n: string) {
    // this.name = n;
    //}
    // Same as above declaration
    //constructor(private readonly id: string, public name: string) { }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //public name: string;
        // private name: string;
        this.employees = []; //this  way this property is only accessable inside the class
    }
    //L68
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    ;
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
//const accounting = new Department('DP01', 'Accounting');
//accounting.addEmployee('StudyTime')
//accounting.addEmployee('Chloe')
//accounting.name = 'Change via global access';
//accounting.employees[2] = 'Anna'; //this is to be avoided, to ensure that the property is no available outside the class, set the property "private". 
//accounting.describe();
//accounting.printEmployeeInfo();
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
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
const employee1 = Department.createEmployee('StaticExample');
console.log(employee1, Department.fiscalYear);
const itDepartment = new ITDepartment('DP02', ['Mac']);
itDepartment.describe();
console.log(itDepartment);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //Getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please insert a value');
        }
        this.addReport(value);
    }
    static getInstance() {
        //if(AccountingDepartment.instance)
        if (this.instance) {
            return this.instance; // AccountingDepartment.instance
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
}
//const accountingDepartment = new AccountingDepartment('DP03', []);
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.mostRecentReport = 'Setter';
accountingDepartment.addEmployee('Max');
accountingDepartment.addEmployee('Manu');
//console.log(accountingDepartment.mostRecentReport);
accountingDepartment.addReport('Report01');
accountingDepartment.addReport('Report02');
accountingDepartment.addReport('Report03');
accountingDepartment.addReport('Report04');
accountingDepartment.describe;
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.printReports();
accountingDepartment.printEmployeeInfo();
//# sourceMappingURL=classes.js.map
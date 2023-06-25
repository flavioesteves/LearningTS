var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Lesson 59-64
var Department = /** @class */ (function () {
    //constructor(n: string) {
    // this.name = n;
    //}
    // Same as above declaration
    //constructor(private readonly id: string, public name: string) { }
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //public name: string;
        // private name: string;
        this.employees = []; //this  way this property is only accessable inside the class
    }
    //L68
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    ;
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2022;
    return Department;
}());
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var employee1 = Department.createEmployee('StaticExample');
console.log(employee1, Department.fiscalYear);
var itDepartment = new ITDepartment('DP02', ['Mac']);
itDepartment.describe();
console.log(itDepartment);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        //Getter
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please insert a value');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        //if(AccountingDepartment.instance)
        if (this.instance) {
            return this.instance; // AccountingDepartment.instance
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    return AccountingDepartment;
}(Department));
//const accountingDepartment = new AccountingDepartment('DP03', []);
var accountingDepartment = AccountingDepartment.getInstance();
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

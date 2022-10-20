//Lesson 59-64
abstract class Department {
  static fiscalYear = 2022;
  //public name: string;
  // private name: string;
  protected employees: string[] = [] //this  way this property is only accessable inside the class

  //constructor(n: string) {
  // this.name = n;
  //}

  // Same as above declaration
  //constructor(private readonly id: string, public name: string) { }
  constructor(protected id: string, public name: string) { }
  //L68
  static createEmployee(name: string) {
    return { name: name };
  }

  //method added a dummy parameter "this: Department" for extra safety
  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee);
  };

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

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
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

const employee1 = Department.createEmployee('StaticExample')
console.log(employee1, Department.fiscalYear);

const itDepartment = new ITDepartment('DP02', ['Mac']);
itDepartment.describe();
console.log(itDepartment);



class AccountingDepartment extends Department {
  private lastReport: string;

  //Getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {

    if (!value) {
      throw new Error('Please insert a value');
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string) {
    if (employee === 'Max') {
      return;
    }
    this.employees.push(employee);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);

  }
}

const accountingDepartment = new AccountingDepartment('DP03', []);


accountingDepartment.mostRecentReport = 'Setter';
accountingDepartment.addEmployee('Max');
accountingDepartment.addEmployee('Manu');

//console.log(accountingDepartment.mostRecentReport);

accountingDepartment.addEmplo

accountingDepartment.addReport('Report01');
accountingDepartment.addReport('Report02');
accountingDepartment.addReport('Report03');
accountingDepartment.addReport('Report04');
accountingDepartment.describe;

console.log(accountingDepartment.mostRecentReport);

accountingDepartment.printReports();
accountingDepartment.printEmployeeInfo();

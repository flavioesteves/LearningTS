//Lesson 59-64
class Department {
  //public name: string;
  // private name: string;
  protected employees: string[] = [] //this  way this property is only accessable inside the class

  //constructor(n: string) {
  // this.name = n;
  //}

  // Same as above declaration
  constructor(private readonly id: string, public name: string) {

  }

  //method added a dummy parameter "this: Department" for extra safety
  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  };

  addEmployee(employee: string) {
    this.employees.push(employee);
  };

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

const accounting = new Department('DP01', 'Accounting');
accounting.addEmployee('StudyTime')
accounting.addEmployee('Chloe')

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
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

}


const itDepartment = new ITDepartment('DP02', ['Mac']);
itDepartment.describe();
console.log(itDepartment);


class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
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

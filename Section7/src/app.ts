console.log("Section 7 - Generics")

//94. Built-in Generics & What are Generics?
/*
const names: Array<string> = []; // string[]
//names[0].split(" ");

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
*/





//95 - Creating a Generic Function
function merge<T extends Object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Mac", hobbies: ["sports"] }, { age: 20 });
const mergeObj2 = merge({ name: "Mac" }, { age: 20 });
console.log(mergeObj);





//96 - Working with Constraints
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj3 = merge2({ name: "Mac" }, { age: 30 });
console.log()





//97 - Another Generic Function
interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";

  if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));
console.log(countAndDescribe("Hello There!!"));
console.log(countAndDescribe(["Sports", "Cookies"]));




//98 - The "keyof" Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}
extractAndConvert({ name: "Mac" }, "name");
console.log(extractAndConvert({ name: "Mac2" }, "name"));





//99 - Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {

    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Mac");
textStorage.addItem("MaX");
textStorage.removeItem("Mac");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(9);
numberStorage.addItem(10);
console.log(numberStorage);

/*
const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Mac" });
objStorage.addItem({ name: "Manu" });
// ...
objStorage.removeItem({ name: "Mac" });
console.log(objStorage.getItems());
*/




//101 - Generic Utility Types

// Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

//  Readonly
const names: Readonly<string[]> = ["Mac", "Apple"];
//names.push("Air"); In this case is not allowed since it is Readonly



//102 - Generic Types vs Union Types


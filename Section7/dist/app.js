"use strict";
console.log("Section 7 - Generics");
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Mac", hobbies: ["sports"] }, { age: 20 });
const mergeObj2 = merge({ name: "Mac" }, { age: 20 });
console.log(mergeObj);
//96 - Working with Constraints
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj3 = merge2({ name: "Mac" }, { age: 30 });
console.log();
function countAndDescribe(element) {
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
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Mac" }, "name");
console.log(extractAndConvert({ name: "Mac2" }, "name"));
//99 - Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Mac");
textStorage.addItem("MaX");
textStorage.removeItem("Mac");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
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
//# sourceMappingURL=app.js.map
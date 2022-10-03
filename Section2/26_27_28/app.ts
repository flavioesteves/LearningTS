
//L26
function add(n1: number, n2: number) {
  return n1 + n2;
}

//Void is the standard
function printResultVoid(num: number): void {
  console.log('Result:' + num);
  //In void type return can be used as well
  return;
}

printResultVoid(add(5, 12));

//Undefined
function printResultUndefined(num: number): undefined {
  console.log('Result: ' + num);
  //In undefined type is mandatory to had the return;
  return;
}

let someValue: undefined;

//L27
//This way TS accepts any function that is not very useful
let combineValuesA: Function;

//The best practice to attribute a Function type to a var
let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printResultVoid;
console.log(combineValues(8, 8));


//L28
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

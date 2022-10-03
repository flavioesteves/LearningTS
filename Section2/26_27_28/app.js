//L26
function add(n1, n2) {
    return n1 + n2;
}
//Void is the standard
function printResultVoid(num) {
    console.log('Result:' + num);
    //In void type return can be used as well
    return;
}
printResultVoid(add(5, 12));
//Undefined
function printResultUndefined(num) {
    console.log('Result: ' + num);
    //In undefined type is mandatory to had the return;
    return;
}
var someValue;
//L27
//This way TS accepts any function that is not very useful
var combineValuesA;
//The best practice to attribute a Function type to a var
var combineValues;
combineValues = add;
//combineValues = printResultVoid;
console.log(combineValues(8, 8));
//L28
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});

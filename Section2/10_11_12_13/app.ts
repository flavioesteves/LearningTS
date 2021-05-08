/**
*10 - Module Introduction
*11 - Using Types
* Core Types:
    number: 1, 5.3, -10 (All number, no differention between integers or floats)
    string: 'Hi', "Hi", `Hi` (All text values)
    boolean: true/false (Just these two, no "truthy" or "falsy" values)

*12 - TypeScript Types vs JavaScript Types
*13 - Important: Type Casing
*/

//11
function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1,number2);
console.log(result);


//12
function add2(n1: number, n2: number) {
    //js
    if (typeof n1 !== 'number' && typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    //ts
    console.log(typeof number3);
    return n1 + n2;
}

const number3 = 5;
const number4 = 2.8;

const result2 = add2(number3,number4);
console.log(result2);
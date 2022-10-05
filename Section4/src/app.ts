/**
 * Lesson 49
 * const: value immutable
 * var: Global & function scopes
 * let: Block scope or any lowe scopes  
 */


const userName = 'Mac';
//userName = 'Macc' // this will create an error during compilation, const is immutable

let age = 30;
age = 28;

console.log(age);
console.log(userName);



function add(a: number, b: number) {
  let result
  result = a + b;
  return result;
}

//if (age > 20) {
//  let isOld = true;
//}

//console.log(result);
//console.log(isOld);


/**
 * Lesson 50
 */

//Case 1
const addNumber = (a: number, b: number) => {
  return a + b;
}

console.log(addNumber(3, 2));

//Case 2
const addNumberTwo = (a: number, b: number) => a + b; //Only is possible because only is available 1 expression on the function body

//Case 3 
const printOutput: (a: number | string) => void = output => console.log(output);
printOutput(addNumber(5, 6));

//Case 4
const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}


/**
 * Lesson 51
 */

const addDefault = (a: number, b: number = 1) => a + b;
console.log(addDefault(2));


/**
 * Lesson 52
 */
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = { name: 'Max', age: 30 }
const copiedPerson = { ...person };
console.log(copiedPerson);


/**
 * Lesson 53
 */
const addRest = (...numbers: number[]) => {
  console.log(numbers)

  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue
  }, 0);
};
const addNumbers = addRest(5, 10, 2, 3.7);
console.log(addNumbers);


/**
 *  Lesson 54
 */
//Example 1 - Arrays
const musicGenres = ['Post-Rock', 'Jazz', 'Metal'];
const genre1 = musicGenres[0];
const [mGenre1, mGenre2, ...remainigMusicGenres] = musicGenres;
console.log(musicGenres, mGenre1, mGenre2, remainigMusicGenres);

//Example2 - Objects
const singlePerson = { namePerson: 'Mac', agePerson: '100' };
const { namePerson: username, agePerson } = singlePerson;
console.log(singlePerson, username, agePerson);


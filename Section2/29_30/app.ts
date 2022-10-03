console.log('Lesson 29');

//L29
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Mac';

if (typeof userInput === 'string') {
  userName = userInput;
}

// userName = userInput;

//L30
console.log('Lesson 30');

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occured!', 500);
console.log(result); //never


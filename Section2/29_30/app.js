console.log('Lesson 29');
//L29
var userInput;
var userName;
userInput = 5;
userInput = 'Mac';
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput;
//L30
console.log('Lesson 30');
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occured!', 500);
console.log(result); //never

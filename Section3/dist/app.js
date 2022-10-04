"use strict";
//Dirty way: ! is the character to ignore the null check
//const button = document.querySelector('button')!;
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
//Clean way
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Welcome'));
}

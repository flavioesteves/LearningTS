//Dirty way: ! is the character to ignore the null check
//const button = document.querySelector('button')!;
const button = document.querySelector('button');

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return; // this is necessary because of the possibility of not returning
}


function clickHandler(message: string) {
  console.log('Clicked! ' + message);
  // let local = 'max'
}
//Clean way
if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Welcome'));
}

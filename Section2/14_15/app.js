/**
 * 14 - Working withNumbers, String & booleans
 * all numbers are float
 *
 * 15 - Type Assignment & Type Inference
 */
//14
function add(n1, n2, showResult, phrase) {
    //if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //    throw new Error('Incorrect input!');
    //}
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0
var number2 = 2.8;
var number3; // best practice if is not initiated
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);

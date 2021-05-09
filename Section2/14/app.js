/**
 * 14 - Working withNumbers, String & booleans
 * all numbers are float
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
var num1 = 5; // 5.0
var num2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(num1, num2, printResult, resultPhrase);

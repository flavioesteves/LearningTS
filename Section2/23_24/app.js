function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
    /*if (resultConversion === 'as-number') {
        return +result // == parseFloat(result)
      } else {
        return result.toString();
      }*/
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '28', 'as-number');
console.log(combinedAges);
var combinedNames = combine('Hello', 'World', 'as-string');
console.log(combinedNames);

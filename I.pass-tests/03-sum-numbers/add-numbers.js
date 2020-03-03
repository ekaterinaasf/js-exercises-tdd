//function addNumbers(numbers) {
module.exports = function(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};
/*
var numbers = [9, 23, 10, 3, 8];
var output = addNumbers(numbers);
console.log(output);
*/

//module.exports = addNumbers;

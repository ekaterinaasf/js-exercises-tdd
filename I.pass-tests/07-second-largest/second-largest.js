module.exports = function(num) {
  //function secondLargest(num) {
  num.sort((a, b) => b - a);
  return num[1];
};

/*
var numbers = [2, 0, 23, 0, 57, 1, 230];
console.log("Numbers are: ", numbers);
console.log(secondLargest(numbers));
*/

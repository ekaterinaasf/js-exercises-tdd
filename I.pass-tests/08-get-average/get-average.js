// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(num) {
  let arr = [];
  for (let i in num) {
    if (typeof num[i] == "number") {
      arr.push(num[i]);
    }
  }
  let k = arr.length;
  //sum of array elements;
  return arr.reduce((a, b) => a + b, 0) / k;
}

var numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
console.log(average(numbers));

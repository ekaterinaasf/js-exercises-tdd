//For the first test:
//expect(output).toEqual(expectedOutput);
/*
module.exports = function(arr) {
  //function removeMiddle(arr) {
  //Math.round(5.5)=6;
  let rez = [];
  let ind = Math.round(arr.length / 2) - 1;
  //let word=rez.splice(ind, 1);
  let word = arr[ind];
  rez.push(word);
  return rez;
};
*/

//for second test:
//expect(words).toEqual(expectedWords);
module.exports = function(arr) {
  //function removeMiddle(arr) {
  //Math.round(5.5)=6;
  let ind = Math.round(arr.length / 2) - 1;
  arr.splice(ind, 1);
  return arr;
};

/* var words = ["mouse", "giraffe", "queen", "window", "bottle"];
console.log("Words are : ", words);
console.log(removeMiddle(words));
*/

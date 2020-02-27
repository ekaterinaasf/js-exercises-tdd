function removeMiddle(arr) {
  //Math.round(5.5)=6;
  let ind = Math.round(arr.length / 2) - 1;
  arr.splice(ind, 1);
  return arr;
}

var words = ["mouse", "giraffe", "queen", "window", "bottle"];
console.log("Words are : ", words);
console.log(removeMiddle(words));

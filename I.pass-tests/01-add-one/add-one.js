module.exports = function(numbers) {
  let rez = numbers.slice();
  for (let i = 0; i < numbers.length; i++) {
    rez[i] += 1;
  }
  return rez;
};

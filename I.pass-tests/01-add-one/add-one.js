module.exports = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 1;
  }
  return numbers;
};

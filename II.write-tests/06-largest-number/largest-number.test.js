var getLargestNumber = require("./largest-number");

test("Get largest number", function() {
  var input = [3, 21, 88, 4, 36];
  var result = getLargestNumber(input);
  var output = 88;
  expect(result).toEqual(output);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

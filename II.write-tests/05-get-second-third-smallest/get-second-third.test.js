var getSecondThird = require("./get-second-third");

test("Get second and third", function() {
  var input = [90, 5, 11, 8, 6];
  var result = getSecondThird(input);
  var output = [6, 8];
  expect(result).toEqual(output);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

var getEven = require("./get-even-numbers");

test("Get the lis of even numbers", function() {
  var input = [22, 13, 73, 82, 4];

  var result = getEven(input);

  var output = [22, 82, 4];

  // Arrange
  // Act
  // Assert

  expect(result).toEqual(output);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

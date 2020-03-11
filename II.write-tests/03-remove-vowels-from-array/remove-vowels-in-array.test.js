var removeVowels2 = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  // Act
  // Assert
  var input = ["Irina", "Etza", "Daniel"];

  var result = removeVowels2(input);
  var output = ["__i_a", "___a", "_a_ie_"];

  expect(result).toEqual(output);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

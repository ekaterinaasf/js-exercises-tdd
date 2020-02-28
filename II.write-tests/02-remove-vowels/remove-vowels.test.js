var removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  // Act
  // Assert
  var result = removeVowels("samuel");

  var output = "_a_ue_";

  // Arrange
  // Act
  // Assert

  expect(result).toEqual(output);
});

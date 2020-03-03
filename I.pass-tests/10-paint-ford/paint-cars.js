module.exports = function(cars, colr) {
  //function paintShop(cars, colr) {
  // make car Red to Pink?? or make first car Pink??
  cars[0].colour = colr;
  return cars;
};
/*
var cars = [
  { make: "Ford", model: "Fiesta", colour: "Red" },
  { make: "Land Rover", model: "Defender", colour: "Muddy" },
  { make: "Toyota", model: "Prius", colour: "Silver" },
  { make: "Honda", model: "Civic", colour: "Yellow" }
];

console.log(paintShop(cars, "Pink"));
*/

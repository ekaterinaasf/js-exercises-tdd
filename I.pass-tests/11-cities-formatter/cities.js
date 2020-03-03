module.exports = function(arr, transf) {
  //function formatCities(arr, transf) {
  //do not understand what to do here, as all necessary is already done in test file
  let rez = [];
  for (let i = 0; i < arr.length; i++) {
    rez.push(arr[i].city + " is the capital of " + arr[i].country);
  }
  return rez;
};

/*
function citi(arr, transf) {
  //function formatCities(arr, transf) {
  //do not understand what to do here, as all necessary is already done in test file
  let rez = [];
  for (let i = 0; i < arr.length; i++) {
    rez.push(arr[i].city + " the capital of " + arr[i].country);
  }
  return rez;
}
var capitals = [
  { city: "Paris", country: "France" },
  { city: "Madrid", country: "Spain" },
  { city: "Rome", country: "Italy" }
];
console.log(citi(capitals));*/

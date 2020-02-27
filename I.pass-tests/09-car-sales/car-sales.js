function sales(obj) {
  var rez = {};
  let prop;
  for (let i in obj) {
    //prop = obj[i].make;
    if (rez[obj[i].make] !== undefined) {
      rez[obj[i].make] += obj[i].price;
    } else {
      rez[obj[i].make] = obj[i].price;
    }
  }
  return rez;
}

var carsSold = [
  { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
  { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
  { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
  { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
  { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
  { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
  { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
];

console.log(sales(carsSold));

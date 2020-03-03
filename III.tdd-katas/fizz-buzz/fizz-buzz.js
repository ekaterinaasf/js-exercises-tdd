function fizzbuzz(num) {
  let rez = "";
  for (let i = 1; i <= num; i++) {
    rez += i + ", ";
  }
  return rez.slice(0, -2);
}

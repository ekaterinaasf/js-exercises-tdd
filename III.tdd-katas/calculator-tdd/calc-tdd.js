function stringer(str) {
  //var matches = str.match(/(\d+)/);
  var matches = str.match(/\d+/g);
  return matches;
}

stringer("1,2");

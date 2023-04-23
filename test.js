function compareLength(a, b) {
  let one = a.toString();
  let two = b.toString();
  if (one.length === two.length) {
    return true;
  }
  return false;
}
console.log(compareLength(123, 345));

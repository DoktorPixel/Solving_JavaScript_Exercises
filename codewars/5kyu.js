// // // 1)
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
function incrementString(str) {
  // Find the index of the first non-digit character from the end of the string
  let index = str.length - 1;
  while (index >= 0 && !isNaN(parseInt(str[index], 10))) {
    index--;
  }
  const stringPart = str.substring(0, index + 1);
  const numberPart = str.substring(index + 1);
  if (numberPart === "") {
    return str + "1";
  }
  const incrementedNumber = String(Number(numberPart) + 1);
  const paddedNumber = incrementedNumber.padStart(numberPart.length, "0");
  return stringPart + paddedNumber;
}
console.log(incrementString("foo")); // Output: "foo1"
console.log(incrementString("foobar23")); // Output: "foobar24"
console.log(incrementString("foo0042")); // Output: "foo0043"
console.log(incrementString("foo9")); // Output: "foo10"
console.log(incrementString("foo099")); // Output: "foo100"

//
function incrementString(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

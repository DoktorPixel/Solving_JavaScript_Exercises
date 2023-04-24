// // // 1)
function numberToString(num) {
  return num.toString();
}
//
function numberToString(num) {
  return String(num);
}

// // // 2)
const stringToNumber = function (str) {
  // put your code here
  return Number(str);
};
// return parseInt(str);

// // // 3)
function makeNegative(num) {
  if (num <= 0) {
    return num;
  }
  return num * -1;
}
//
function makeNegative(num) {
  return -Math.abs(num);
}
//
function makeNegative(num) {
  return num < 0 ? num : -num;
}

// // // 4) Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x) {
  let y = x.split("").map(function (digit) {
    if (digit < 5) {
      digit = 0;
    } else {
      digit = 1;
    }
    return digit;
  });
  return Number(y.join(""));
}
console.log(fakeBin("45385593107843568")); // 1011110001100111
//
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}
//
function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? (result += 0) : (result += 1);
  }
  return result;
}

// // // 5) You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b);
}
//
const otherAngle = (a, b) => 180 - a - b;


// // // 6) 
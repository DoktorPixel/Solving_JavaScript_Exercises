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

// // // 6) Task: Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. Mind the input validation.
function sumArray(array) {
  if (array === null || array === "" || array === NaN || array.length <= 2) {
    return 0;
  }
  let sortArr = array.sort(function (a, b) {
    return a - b;
  });
  sortArr.shift();
  sortArr.pop();
  const sum = array.reduce((total, currentValue) => total + currentValue);
  return sum;
}
sumArray([6, 2, 1, 8, 10]);

//
function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }
  const sortedArray = [...array].sort((a, b) => a - b);
  sortedArray.shift();
  sortedArray.pop();
  const sum = sortedArray.reduce(
    (total, currentValue) => total + currentValue,
    0
  );
  return sum;
}

// // // 7) Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output) 5, "Hello" -> "HelloHelloHelloHelloHello"
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i += 1) {
    result += s;
  }
  return result;
}
console.log(repeatStr(3, "hello")); // выводит 'hellohellohello'

//
function copyString(str, n) {
  return str.repeat(n);
}
console.log(copyString("hello", 3)); // выводит 'hellohellohello'

// // // 8) You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not
function check(a, x) {
  return a.includes(x);
}
//
const check = (a, x) => a.includes(x);

// // // 9) Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return parseInt(time / 2);
}
//
function litres(time) {
  return Math.floor(time / 2);
}

// // // 10) Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1**2 + 2**2 + 2**2 = 9
function squareSum(numbers) {
  let newNumbers = [];
  for (let number of numbers) {
    newNumbers.push(number ** 2);
  }
  let sum = newNumbers.reduce((total, currentValue) => total + currentValue, 0);
  return sum;
}
console.log(squareSum([0, 3, 4, 5])); // 50
//
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

// // // 11)
// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
// For example:  derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
// derive(7, 8) --> this should output "56x^7"
// derive(5, 9) --> this should output "45x^8"

function derive(coefficient, exponent) {
  let string = coefficient * exponent + "x^" + (exponent - 1);
  return string;
}
console.log(derive(7, 8)); //56x^7
console.log(derive(5, 9)); //45x^8
//
function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}

// // // 12)



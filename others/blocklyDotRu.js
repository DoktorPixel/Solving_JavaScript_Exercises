// // // 1)
let result = [];
function multiply(b) {
  let x = b ** 2;
  let y = b ** 3;
  return (result = [b, x, y]);
}
multiply(7);
console.log(result[0]); //7
console.log(result[1]); //49
console.log(result[2]); //343

const multiply = (b) => {
  let x = b ** 2;
  let y = b ** 3;
  return [b, x, y];
};
console.log(multiply(7)); //(3) [7, 49, 343]

// // // 2)
const resultTwo = (a, b) => {
  console.log("sum =", a + b);
  console.log("mult =", a * b);
};
resultTwo(3, 5);
// sum = 8
// mult = 15

// // // 3)
let number1 = prompt("Please enter a number one!");
let number2 = prompt("Please enter a number two!");
let result1 = number1 ** 2;
let result2 = number2 ** 2;
let result3 = result1 + result2;
alert(
  `квадрат первого числа = ${result1} , квадрат второго числа = ${result2} , сумма квадратов чисел = ${result3} .`
);

// // // 4)
let birthYear = prompt("Введите год рождения:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(currentYear);
let lastDigit = age % 10;
let yearsOrNot;

if (lastDigit === 1) {
  yearsOrNot = "год";
} else if (lastDigit >= 2 && lastDigit <= 4) {
  yearsOrNot = "года";
} else {
  yearsOrNot = "лет";
}

alert("Тебе сейчас " + age + " " + yearsOrNot + ".");

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
//const multiply = function (b) {...}
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

// // // 5)
let number;
while (true) {
  number = Math.round(Number(prompt("Введите число")));
  if (!Number.isNaN(number) && number !== null && number !== "") {
    break;
  }
  alert("Это не число! Попробуйте еще раз.");
}
if (number > 0) {
  number *= 2;
} else {
  number /= 2;
}
console.log(number);

// // // 6)
let a = Number(prompt("Введите коэффициент a"));
let b = Number(prompt("Введите коэффициент b"));
let c = Number(prompt("Введите коэффициент c"));

let discriminant = b * b - 4 * a * c; // вычисляем дискриминант квадратного уравнения по формуле D = b^2 - 4ac

if (discriminant >= 0) {
  console.log("Уравнение имеет решение");
} else {
  console.log("Уравнение не имеет решения");
}

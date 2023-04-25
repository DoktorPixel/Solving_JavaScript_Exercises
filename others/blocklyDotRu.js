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

// // // 7)

function multiply(a, b) {
  let range = [];
  for (let i = a; i <= b; i += 1) {
    if (i % 2 === 0) {
      range.push(i);
    }
  }
  return range;
}
console.log(multiply(10, 20)); //multiply(10, 20)

// // // 8) Создай функцию, которая принимает произвольное целое число и возвращает сумму его цифр
function sumDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
console.log(sumDigits(123)); // 6
console.log(sumDigits(9876)); // 30
console.log(sumDigits(444)); // 12

// С использованием метода reduce():
function sumDigits(number) {
  return number
    .toString()
    .split("")
    .reduce(function (acc, digit) {
      return acc + parseInt(digit);
    }, 0);
}

// С использованием метода map() и метода reduce():
function sumDigits(number) {
  return number
    .toString()
    .split("")
    .map(function (digit) {
      return parseInt(digit);
    })
    .reduce(function (acc, digit) {
      return acc + digit;
    });
}

// С использованием рекурсии:
function sumDigits(number) {
  if (number < 10) {
    return number;
  }
  return (number % 10) + sumDigits(Math.floor(number / 10));
}

// // // 9) сравнение колличества цифр
function compareLength(a, b) {
  let one = a.toString();
  let two = b.toString();
  if (one.length === two.length) {
    return true;
  }
  return false;
}
console.log(compareLength(123, 345)); //true

//
function compareLength(a, b) {
  return a.toString().length === b.toString().length;
}
console.log(compareLength(123, 345)); //true

//неявное приведение типов к строкам
function compareLength(a, b) {
  return `${a}`.length === `${b}`.length;
}
console.log(compareLength(123, 345)); //true

// // // 10) Создайте Рекурсивную функцию (процедуру). принимает в качестве параметра целое положительное число n, и выводит на экран все числа от 1 до n. (Проверка ввод: 5 вывод: 1, 2, 3, 4, 5)
function printNumbers(n) {
  if (n <= 0) {
    return;
  } else {
    printNumbers(n - 1);
    console.log(n);
  }
}
printNumbers(5); // выведет: 1, 2, 3, 4, 5
//
function printNumbers(n) {
  if (n <= 0) {
    return;
  }
  console.log(n); // сначала выводим значение n в консоль
  printNumbers(n - 1); // затем вызываем рекурсивно функцию с аргументом n-1
}
printNumbers(5); // выведет наоборот: 5, 4, 3, 2, 1

// // // 11)Создайте рекурсивную функцию, которая принимает B качестве параметра целое положительное число n и возвращает сумму всех чисел от 1 до n (Проверка ввод: 7 вывод: сумма чисел от 1 до 7 равна 28)

function sumNum(n) {
  let sum = 0;
  if (n <= 0) {
    return;
  }
  sum += n;
  sumNum(n - 1);
}

// // // 12) напиши функцию, которая проверяет является ли слово анаграммой
function isAnagram(word1, word2) {
  // Удаляем пробелы и приводим слова к нижнему регистру
  word1 = word1.replace(/\s/g, "").toLowerCase();
  word2 = word2.replace(/\s/g, "").toLowerCase();
  // Сравниваем длины слов
  if (word1.length !== word2.length) {
    return false;
  }
  // Сортируем буквы в словах и сравниваем их
  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");
  return sortedWord1 === sortedWord2;
}
// Пример использования:
const word1 = "listen";
const word2 = "silent";
const isAnagram = isAnagram(word1, word2); // true

//
function isAnagram(word1, word2) {
  // Удаляем пробелы и приводим слова к нижнему регистру
  word1 = word1.replace(" ", "").toLowerCase();
  word2 = word2.replace(" ", "").toLowerCase();
  // Сравниваем длины слов
  if (word1.length !== word2.length) {
    return false;
  }
  // Сортируем буквы в словах и сравниваем их
  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");
  return sortedWord1 === sortedWord2;
}

// // // 13) Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u».
function countVowels(str) {
  // Приводим строку к нижнему регистру, чтобы учесть и заглавные гласные буквы
  str = str.toLowerCase();
  // Создаем массив из гласных букв
  const vowels = ["a", "e", "i", "o", "u"];
  // Инициализируем счетчик гласных букв
  let count = 0;
  // Проходимся по каждому символу в строке
  for (let i = 0; i < str.length; i++) {
    // Если символ является гласной буквой, увеличиваем счетчик
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  // Возвращаем количество гласных букв в строке
  return count;
}

// Пример использования:
const str = "Hello World";
const numVowels = countVowels(str); // 3

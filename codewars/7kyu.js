// // // 1) Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//Examples: Input: 42145 Output: 54421 , Input: 123456789 Output: 987654321
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(descendingOrder(123456789));
//
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// // // 2) An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], i);
    // Если текущая буква уже встречалась в слове раньше, значит это не изограмма
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); //false
//
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
  // Метод new Set() создает новый объект Set, в который мы передаем строку str в качестве аргумента. Затем мы вызываем метод size для объекта Set, который возвращает количество уникальных символов в строке.
}
console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); //false

//
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
  // В каждой итерации внутреннего цикла мы проверяем, есть ли текущая буква (обрабатываемая внешним циклом) в оставшейся части строки (обрабатываемой внутренним циклом). Если да, это означает, что строка не является изограммой, и мы возвращаем false.
  return true;
}

// // // 3)
// Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") return name + " plays banjo";
  else return name + " does not play banjo";
}
//
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

// // // 4)
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// Example: (input --> output) заменить: A=T, T=A, G=C, C=G
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  let complement = [];
  for (let letter of dna)
    if (letter === "A") {
      complement.push("T");
    } else if (letter === "T") {
      complement.push("A");
    } else if (letter === "G") {
      complement.push("C");
    } else if (letter === "C") {
      complement.push("G");
    }
  return complement.join("");
}
console.log(DNAStrand("ATTGC")); //TAACG

//С использованием метода replace и регулярных выражений:
function dnaComplement(dna) {
  return dna
    .replace(/A/g, "t")
    .replace(/T/g, "a")
    .replace(/C/g, "g")
    .replace(/G/g, "c")
    .toUpperCase();
}

//С использованием объекта для хранения пар соответствующих символов:
function dnaComplement(dna) {
  var complement = "";
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  for (var i = 0; i < dna.length; i++) {
    complement += pairs[dna[i]];
  }
  return complement;
}

// // // 4)
// Given the triangle of consecutive odd numbers:
//             1
//          3     5
//       7     9    11
//   13    15    17    19
//(Input --> Output) 1 -->  1
// 2 --> 3 + 5 = 8
//С использованием цикла:
function rowSumOddNumbers(n) {
  let startNumber = n * (n - 1) + 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += startNumber + 2 * i;
  }
  return sum;
}
console.log(rowSumOddNumbers(1)); // Output: 1
console.log(rowSumOddNumbers(2)); // Output: 8

//С использованием формулы для суммы арифметической прогрессии:
function rowSumOddNumbers(n) {
  let startNumber = n * (n - 1) + 1;
  let lastNumber = startNumber + 2 * (n - 1);
  let sum = ((startNumber + lastNumber) / 2) * n;
  return sum;
}
console.log(rowSumOddNumbers(1)); // Output: 1
console.log(rowSumOddNumbers(2)); // Output: 8

//С использованием математической формулы для вычисления значения в конкретной позиции:
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
console.log(rowSumOddNumbers(1)); // Output: 1
console.log(rowSumOddNumbers(2)); // Output: 8
console.log(rowSumOddNumbers(42)); // Output: 74088
//тоже самое
function rowSumOddNumbers(n) {
  return n * n * n;
}

// // // 5)
// В данной задаче мы имеем декартову плоскость с целочисленными координатами x и y, а также три функции: f, g и h. Функции определены следующим образом:
// f(x, y) = min(x, y) - возвращает минимальное значение из x и y.
// g(x, y) = max(x, y) - возвращает максимальное значение из x и y.
// h(x, y) = x + y - возвращает сумму x и y.
// Задача состоит в вычислении суммы значений f(x, y), g(x, y) и h(x, y) для всех целочисленных x и y в заданном диапазоне D: 1 <= x <= n и 1 <= y <= n, где n - заданное целое число (n >= 1).

// Функция для вычисления суммы значений f(x, y)
function sumin(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += Math.min(x, y);
    }
  }
  return sum;
}

// Функция для вычисления суммы значений g(x, y)
function sumax(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += Math.max(x, y);
    }
  }
  return sum;
}

// Функция для вычисления суммы значений h(x, y)
function sumsum(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += x + y;
    }
  }
  return sum;
}

console.log(sumin(6)); // Output: 91
console.log(sumax(6)); // Output: 161
console.log(sumsum(6)); // Output: 252

console.log(sumin(45)); // Output: 31395
console.log(sumax(45)); // Output: 61755
console.log(sumsum(45)); // Output: 93150

console.log(sumin(999)); // Output: 332833500
console.log(sumax(999)); // Output: 665167500
console.log(sumsum(999)); // Output: 998001000

// // // 6)
// Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.
// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock
// Sample Input: 07:05:45PM Sample Output: 19:05:45
function convertTime(time) {
  let militaryTime = "";
  const isAM = time.slice(-2) === "AM";
  console.log(isAM); // false
  let [hours, minutes, seconds] = time.slice(0, -2).split(":");
  console.log(hours, minutes, seconds); //07 05 45
  // Шаг 1: Проверяем, является ли время AM или PM
  if (isAM) {
    // Шаг 2: Если время AM и часы равны 12, преобразуем их в 00
    if (hours === "12") {
      hours = "00";
    }
  } else {
    // Шаг 3: Если время PM и часы не равны 12, добавляем 12 к часам
    if (hours !== "12") {
      hours = String(Number(hours) + 12);
    }
  }
  // Шаг 4: Собираем преобразованные значения часов, минут и секунд в новую строку
  militaryTime = `${hours}:${minutes}:${seconds}`;
  // Шаг 5: Возвращаем время в формате 24-часового времени
  return militaryTime;
}
// Пример использования
const inputTime = "07:05:45PM";
const militaryTime = convertTime(inputTime);
console.log(militaryTime); // Output: 19:05:45

// // // 7)
// Convert Improper Fraction to Mixed Number. You will need to convert an improper fraction to a mixed number. For example:
// getMixedNum('18/11'); // Should return '1 7/11'
// getMixedNum('13/5'); // Should return '2 3/5'
// getMixedNum('75/10'); // Should return '7 5/10'

function getMixedNum(fraction) {
  const [numerator, denominator] = fraction.split("/").map(Number);
  const whole = Math.floor(numerator / denominator);
  const remainder = numerator % denominator;

  if (remainder === 0) {
    return `${whole}`;
  } else {
    return `${whole} ${remainder}/${denominator}`;
  }
}
console.log(getMixedNum("18/11")); //1 7/11
console.log(getMixedNum("13/5")); //2 3/5

//
function getMixedNum(fraction) {
  let [a, b] = fraction.split("/");
  return `${parseInt(a / b)} ${a % b}/${b}`;
}

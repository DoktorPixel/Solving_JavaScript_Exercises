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
	return n*n*n
}
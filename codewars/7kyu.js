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

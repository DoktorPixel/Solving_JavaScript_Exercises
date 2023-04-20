let birthYear = prompt("Введите год рождения:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(currentYear)
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

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

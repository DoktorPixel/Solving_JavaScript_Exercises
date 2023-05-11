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

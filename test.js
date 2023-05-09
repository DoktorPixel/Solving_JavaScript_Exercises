function incrementString(string) {
  let index = string.length - 1;
  console.log(index);
  return parseFloat(string);
}

console.log(incrementString("foobar000")); // "foobar001"
console.log(incrementString("foobar999")); //"foobar1000"
//console.log(incrementString("foobar00999")); //foobar01000"
//console.log(incrementString("foo")); //"foo1"

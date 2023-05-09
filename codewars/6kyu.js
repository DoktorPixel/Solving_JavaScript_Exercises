// // // 1)
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: (развернуть слово если в нем 5 и более букв)
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(sentence) {
  return sentence
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
console.log(spinWords("Hey fellow warriors")); // Output: "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // Output: "This is a test"
console.log(spinWords("This is another test")); // Output: "This is rehtona test"

//
function spinWords(sentence) {
  let sentArr = sentence.split(" ");
  let newArr = [];
  for (let sent of sentArr) {
    if (sent.length >= 5) {
      newArr.push(sent.split("").reverse().join(""));
    } else {
      newArr.push(sent);
    }
  }
  return newArr.join(" ");
}

//
function spinWords(sentence) {
  return sentence.replace(/\w{5,}/g, (word) =>
    word.split("").reverse().join("")
  );
}

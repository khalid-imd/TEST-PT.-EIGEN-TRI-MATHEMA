function reverseAlphabet(str) {
  const alphabet = str.replace(/[0-9]/g, "");
  const reversedAlphabet = alphabet.split("").reverse().join("");
  const number = str.replace(/[^0-9]/g, "");
  return reversedAlphabet + number;
}

const result = reverseAlphabet("NEGIE1");
console.log(result);

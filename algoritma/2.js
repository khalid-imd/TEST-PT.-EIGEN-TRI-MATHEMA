function findLongestWord(sentence) {
  const words = sentence.split(" ");
  const sortedWords = words.sort((a, b) => b.length - a.length);
  return sortedWords[0];
}

const longestWord = findLongestWord(
  "Saya sangat senang mengerjakan soal algoritma"
);
console.log(`${longestWord}: ${longestWord.length} karakter`);

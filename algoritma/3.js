function countWordOccurrences(input, query) {
  const result = Array(query.length).fill(0);

  for (let i = 0; i < query.length; i++) {
    result[i] = input.filter((element) => element === query[i]).length;
  }

  return result;
}

const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];
const counts = countWordOccurrences(input, query);
console.log(counts);

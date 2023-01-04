function findDifference(matrix) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        diagonal1 += matrix[i][j];
      }
      if (i + j === matrix.length - 1) {
        diagonal2 += matrix[i][j];
      }
    }
  }

  return diagonal1 - diagonal2;
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
const difference = findDifference(matrix);
console.log(difference);

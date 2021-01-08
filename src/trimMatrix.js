export default function trimMatrix(matrix) {
  for (let row in matrix) {
    for (let col in matrix[row]) {
      if (typeof matrix[row][col] === 'string') {
        matrix[row][col] = matrix[row][col].trim();
      }
    }
  }
  return 0;
}

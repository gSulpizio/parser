export default function trimMatrix(matrix) {
  let newMatrix;
  for (let row in matrix) {
    for (let col in matrix[row]) {
      if (matrix[row][col]) {
        newMatrix[row][col] = matrix[row][col].trim();
      }
    }
  }
  return newMatrix;
}

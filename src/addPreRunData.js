export default function addPreRunData(submatrix, result) {
  for (let row of submatrix) {
    result.preRun.push(row);
  }
}

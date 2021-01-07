export default function addMetaData(matrix, result) {
  let from;
  for (let row = 0; row < matrix.length; row++) {
    //for row in matrix gives number under the form of a string?
    if (matrix[row][0] && matrix[row][0].includes('Validation')) {
      result.meta.header = matrix.slice(0, row);
      from = row + 1;
    }
    if (matrix[row][0] && matrix[row][0].includes('Calibration Information')) {
      result.meta.validation = matrix.slice(from, row);
      from = row + 1;
    }
    if (matrix[row][0] && matrix[row][0].includes('Initial Conditions')) {
      result.meta.calibrationInformation = matrix.slice(from, row);
      from = row + 1;
    }
    if (matrix[row][0] && matrix[row][0].includes('Pre-Run Actions')) {
      result.meta.initialConditions = matrix.slice(from, row);
      from = row + 1;
    }
    if (matrix[row][0] && matrix[row][0].includes('Start the Run')) {
      result.meta.preRunActions = matrix.slice(from, row);
      from = row + 1;
    }
    if (matrix[row][0] && matrix[row][0].includes('1) ')) {
      result.meta.preRunActions = matrix.slice(from, row);
      from = row + 1;
    }
  }
  //console.log(result.meta.header);
}

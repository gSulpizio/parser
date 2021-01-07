export default function addRun(matrix, result, from) {
  for (let i = from + 3; i < matrix.length; i++) {
    if (matrix[i][0] && matrix[i][0].includes(') ')) {
      continue;
    }

    //console.log(rawData[i][5]);
    result.variables.x.data.push(matrix[i][5]);
    result.variables.y.data.push(matrix[i][2] - matrix[i][3]);
    result.variables.t.data.push(matrix[i][1]);
    result.variables.u.data.push(matrix[i][4]);
    result.variables.g.data.push(matrix[i][6]);
  }
}

export default function addRunData(rawData, data, from, to) {
  for (let i = from; i < to; i++) {
    for (let j = 0; j < rawData[i].length; j++) {
      if (typeof rawData[i][j] !== 'undefined') {
        if (rawData[i][j].includes('Gas')) {
          data.preRun.push(rawData[i][j]);
        }
        if (rawData[i][j].includes(')')) {
          data.preRun.push(rawData[i][1]);
        }
      }
    }
  }
}

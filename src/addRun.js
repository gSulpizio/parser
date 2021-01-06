export default function addRun(rawData, data, from) {
  for (let i = from + 3; i < rawData.length; i++) {
    if (rawData[i][0] && rawData[i][0].includes(') ')) {
      continue;
    }

    //console.log(rawData[i][5]);
    data.x.push(rawData[i][5]);
    data.y.push(rawData[i][2] - rawData[i][3]);
    data.time.push(rawData[i][1]);
    data.programTemperature.push(rawData[i][4]);
    data.gasFlow.push(rawData[i][6]);
  }
}

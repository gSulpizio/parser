import { writeFileSync } from 'fs';
import { join } from 'path';
import SG from 'ml-savitzky-golay-generalized'; //TO REMOVE, THIS IS FOR TESTING
import { xyUniqueX } from 'ml-spectra-processing'; //TO REMOVE, THIS IS FOR TESTING

export default function getSANPlot(oldData) {
  let data = { x: oldData.x.slice(), y: oldData.y.slice() };
  data.y.reverse();
  data.x.reverse();

  //data = xyUniqueX(data, { isSorted: false });
  data.y.sort((a, b) => b - a);
  let newData = {
    x: Array.from({ length: data.y.length }, (_, index) => index + 1),
    y: data.y,
  };

  let minX = Math.min(...newData.x);
  let minY = Math.min(...newData.y);

  //console.log(minY);

  newData.x = newData.x.map((x) => x + Math.abs(minX) + 1);
  newData.y = newData.y.map((x) => x + Math.abs(minY) + 1);

  newData.y = newData.y.map((x) => Math.log10(x));
  newData.x = newData.x.map((x) => Math.log10(x));

  newData = dataFilter(newData, 10000000);
  //newData.y = getDerivative(newData);

  console.log('x:', newData.x.length);
  console.log('y:', newData.y.length);

  newData.y = SG(newData.y, newData.x, { derivative: 1, windowSize: 5 });

  writeFileSync(join(__dirname, 'data.json'), JSON.stringify(newData, 'utf8'));

  let dY = SG(data.y, data.x, { derivative: 1 });

  //dY.sort((a, b) => a - b);

  //writeFileSync(join(__dirname, 'data.json'),JSON.stringify({ x: data.x, y: dY }),'utf8',);
}

function dataFilter(data, tolerance = 2) {
  let newData = { x: [], y: [] };

  const t1 = Math.floor(data.y.length / 10);
  const t2 = Math.floor((9 * data.y.length) / 10);
  let sum = 0;
  for (let i = t1; i < t2; i++) {
    sum += Math.abs(data.y[i] - data.y[i + 1]);
  }
  const threshold = (tolerance * sum) / (t2 - t1);

  let step;
  console.log('threshold', threshold);

  for (let i = 1; i < data.y.length - 2; i++) {
    step = Math.abs(data.y[i] - data.y[i + 1]);
    if (step <= threshold) {
      newData.x.push(data.x[i]);

      newData.y.push(data.y[i]);
    }
  }

  return newData;
}

function getDerivative(data) {
  let newArray = [];
  for (let i = 1; i < data.x.length; i++) {
    newArray.push(
      Math.abs(data.y[i] - data.y[i - 1]) / Math.abs(data.x[i] - data.x[i - 1]),
    );
  }
  data.x.shift();
  return newArray;
}

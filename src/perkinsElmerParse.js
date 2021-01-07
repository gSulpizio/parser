import addMetaData from './addMetaData';
import addPreRunData from './addPreRunData';
import addRun from './addRun';
import addRunData from './addRunData';
import { getMatrixFromXLSX } from './getMatrixFromXLSX';

export default function perkinsElmerParse(file) {
  let matrix = getMatrixFromXLSX(file);
  //console.log(content);
  let from = 0;
  let result = {
    variables: {
      x: { data: [], units: '°C', label: 'temperature', type: 'INDEPENDENT' },
      y: { data: [], units: 'mg', label: 'weight', type: 'INDEPENDENT' }, //independante?
      t: { data: [], units: 'min', label: 'time', type: 'INDEPENDENT' },
      u: {
        data: [],
        units: '°C',
        label: 'program temperature',
        type: 'INDEPENDENT',
      },
      g: { data: [], units: '', label: 'gas flow', type: 'INDEPENDENT' },
    },
    meta: {
      Header: [],
    },
  };
  let swtch = true;
  let i = 0;
  while ((swtch = true) && i < matrix.length) {
    if (typeof matrix[i][0] === 'undefined') {
      i++;
      continue;
    }
    if (matrix[i][0] === 'Pre-Run Actions ') {
      addMetaData(matrix.slice(from, i), result);
      from = i + 1;
    }

    if (matrix[i][0] === 'Start the Run ') {
      addPreRunData(matrix.slice(from, i), result);
      from = i + 1;
    }

    if (matrix[i][0].includes(') ') && from - i !== 0) {
      addRunData(matrix.slice(from, i), result);
      from = i + 1;
      swtch = false;
      break;
    }
    i++;
  }
  addRun(matrix, result, from);
  return result;
}

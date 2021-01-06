import addMetaData from './addMetaData';
import addPreRunData from './addPreRunData';
import addRunData from './addRunData';
import addRun from './addRun';
import { getMatrixFromXLSX } from './getMatrixFromXLSX';

export default function perkinsElmerParse(file) {
  let content = getMatrixFromXLSX(file);
  let from = 0;
  let to = 0;
  let data = { x: [], y: [], time: [], programTemperature: [], gasFlow: [] };
  let swtch = true;
  let i = 0;
  while ((swtch = true) && i < content.length) {
    if (typeof content[i][0] === 'undefined') {
      i++;
      continue;
    }
    if (content[i][0] === 'Pre-Run Actions ') {
      to = i;
      addMetaData(content, data, from, to);
      from = to + 1;
    }

    if (content[i][0] === 'Start the Run ') {
      to = i;
      addPreRunData(content, data, from, to);
      from = to + 1;
    }

    if (content[i][0].includes(') ') && from - i !== 0) {
      to = i;
      addRunData(content, data, from, to);
      from = to + 1;
      swtch = false;
      break;
    }
    i++;
  }
  addRun(content, data, from);
  return data;
}

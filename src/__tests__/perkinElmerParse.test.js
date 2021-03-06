import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import getSANPlot from '../getSANPlot.js';

import perkinElmerParse from '../perkinElmerParse.js';

describe('test perkinsElmerParse', () => {
  it.only('Testing getSANPlot with nmr data', () => {
    let file = readFileSync(join(__dirname, '/example/nmr.json'));
    let result = JSON.parse(file);

    //for testing purposes:

    let sanData = result;

    getSANPlot(sanData, { isSorted: false });
  });
  it('should return object with the info from files rawTGA', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA.xlsx'));
    let result = perkinElmerParse(file);

    let resultTemplate = {
      variables: {
        x: { units: '°C', label: 'temperature', type: 'DEPENDENT' },
        y: { units: 'mg', label: 'weight', type: 'DEPENDENT' },
        t: { units: 'min', label: 'time', type: 'INDEPENDENT' },
        u: {
          units: '°C',
          label: 'program temperature',
          type: 'DEPENDENT',
        },
        g: { units: 'ml/min', label: 'gas flow', type: 'DEPENDENT' },
      },
      meta: {
        header: [
          ['Operator ID:', 'YL'],
          ['Comment:', ''],
          ['Serial Number:', 2042001],
          ['Sample Weight:', '3.703 mg'],
          ['Display Weight:', 3.703],
        ],
        validation: [
          ['Validated:', 'No'],
          ['By:', ''],
          ['Date:', ''],
        ],
        calibrationInformation: [['Date/Time:', '']],
      },
    };
    //for testing purposes:

    let sanData = {
      x: result.variables.x.data.slice(),
      y: result.variables.y.data.slice(),
    };

    getSANPlot(sanData, { isSorted: false });
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(4140);

    delete result.variables.x.data;
    delete result.variables.y.data;
    delete result.variables.t.data;
    delete result.variables.u.data;
    delete result.variables.g.data;

    expect(result).toStrictEqual(resultTemplate);

    //writeFileSync(join(__dirname, 'data.json'), JSON.stringify(data), 'utf8');

    //console.log(result);
  });
  it('should return object with the info from file rawTGA2.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA2.xlsx'));
    let result = perkinElmerParse(file);

    let resultTemplate = {
      variables: {
        x: { units: '°C', label: 'temperature', type: 'DEPENDENT' },
        y: { units: 'mg', label: 'weight', type: 'DEPENDENT' },
        t: { units: 'min', label: 'time', type: 'INDEPENDENT' },
        u: {
          units: '°C',
          label: 'program temperature',
          type: 'DEPENDENT',
        },
        g: { units: 'ml/min', label: 'gas flow', type: 'DEPENDENT' },
      },
      meta: {
        header: [
          ['Operator ID:', 'YL'],
          ['Comment:', ''],
          ['Serial Number:', 2042001],
          ['Sample Weight:', '2.664 mg'],
          ['Display Weight:', 2.664],
        ],
        validation: [
          ['Validated:', 'No'],
          ['By:', ''],
          ['Date:', ''],
        ],
        calibrationInformation: [['Date/Time:', '']],
      },
    };

    expect(result).toMatchSnapshot();

    expect(result.variables.x.data).toHaveLength(5699);
    delete result.variables.x.data;
    delete result.variables.y.data;
    delete result.variables.t.data;
    delete result.variables.u.data;
    delete result.variables.g.data;

    expect(result).toStrictEqual(resultTemplate);
  });
});

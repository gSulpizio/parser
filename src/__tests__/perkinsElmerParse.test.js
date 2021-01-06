import { readFileSync } from 'fs';
import { join } from 'path';

import perkinsElmerParse from '../perkinsElmerParse.js';

describe('test perkinsElmerParse', () => {
  it('should return object with the info from file rawTGA.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA.xlsx'));
    let result = perkinsElmerParse(file);
    console.log(result);
    //expect(getMatrixFromXLSX(file)).toStrictEqual([['a', 'b'],['c', 'd'],]);
  });
});

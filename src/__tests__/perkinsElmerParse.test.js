import { readFileSync } from 'fs';
import { join } from 'path';

import perkinsElmerParse from '../perkinsElmerParse.js';

describe('test perkinsElmerParse', () => {
  it('should return object with the info from file rawTGA.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA.xlsx'));
    let result = perkinsElmerParse(file);
    //console.log(result);
  });
  it('should return object with the info from file rawTGA2.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA2.xlsx'));
    let result = perkinsElmerParse(file);
    //console.log(result);
  });
  it('should return object with the info from file rawTGA9.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA9.xlsx'));
    let result = perkinsElmerParse(file);
    console.log(result);
  });
});

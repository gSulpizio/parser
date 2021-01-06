import { readFileSync } from 'fs';
import { join } from 'path';

import { getMatrixFromXLSX } from '../getMatrixFromXLSX';

describe('test getMatrixFromXLSX', () => {
  it('should return matrix [["a", "b"], ["c", "d"]]', () => {
    let file = readFileSync(join(__dirname, '/example/shortTest.xlsx'));
    expect(getMatrixFromXLSX(file)).toStrictEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });
  it('should return from file rawTGA.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA.xlsx'));
    let result = getMatrixFromXLSX(file);
    //console.log(result);
    //expect(getMatrixFromXLSX(file)).toStrictEqual([['a', 'b'],['c', 'd'],]);
  });
});

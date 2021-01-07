import { readFileSync } from 'fs';
import { join } from 'path';

import perkinElmerParse from '../perkinElmerParse.js';

describe('test perkinsElmerParse', () => {
  it('should return object with the info from files rawTGA', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA.xlsx'));
    let result = perkinElmerParse(file);

    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(4140);

    //console.log(result);
  });
  it('should return object with the info from file rawTGA2.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA2.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(5699);

    //console.log(result);
  });

  it('should return object with the info from files rawTGA3', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA3.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(3719);
    //console.log(result.x.length);
    //console.log(result);
  });
  it('should return object with the info from file rawTGA4.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA4.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(5699);

    //console.log(result);
  });
  it('should return object with the info from file rawTGA5.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA5.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(10559);

    //console.log(result);
  });
  it('should return object with the info from files rawTGA6', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA6.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(11099);

    //console.log(result);
  });
  it('should return object with the info from files rawTGA7', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA7.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(22379);

    //console.log(result);
  });
  it('should return object with the info from files rawTGA8', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA8.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(5279);

    //console.log(result);
  });
  it('should return object with the info from file rawTGA9.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA9.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(2123);

    //console.log(result);
  });
  it('should return object with the info from file rawTGA10.xlsx', () => {
    let file = readFileSync(join(__dirname, '/example/rawTGA10.xlsx'));
    let result = perkinElmerParse(file);
    expect(result).toMatchSnapshot();
    expect(result.variables.x.data).toHaveLength(4292);

    //console.log(result);
  });
});

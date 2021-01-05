import getMatrixFromXLSX from 'getMatrixFromXLSX';

export function parser(file) {
  let Matrix = getMatrixFromXLSX(file);

  for (let i = 0; i < Matrix.length; i++) {}
}

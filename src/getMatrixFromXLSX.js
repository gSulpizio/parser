import XLSX from 'xlsx';

export function getMatrixFromXLSX(blob) {
  const workbook = XLSX.read(blob);
  return XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
    header: 1,
  });
}

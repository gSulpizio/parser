export default function addPreRunData(rawData, data, from, to) {
  data.preRun = rawData.slice(from, to);
}

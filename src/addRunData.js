export default function addRunData(rawData, data, from, to) {
  data.preRun = rawData.slice(from, to);
}

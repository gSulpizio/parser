export default function addMetaData(rawData, data, from, to) {
  data.meta = rawData.slice(from, to);
}

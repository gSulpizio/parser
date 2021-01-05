export default function addPreRunData.js(rawData, data, from, to) {
    data.run=rawData.slice(from, to);
  }
  
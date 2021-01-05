export default function addPreRunData.js(rawData, data, from, to) {
    data.preRun=rawData.slice(from, to);
  }
  
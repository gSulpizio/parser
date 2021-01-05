import addMetaData from './addMetaData';

export default function perkinsElmerParse(content) {
  let from = 0;
  let to = 0;
  let data = {};
  for (let i = 0; i < content.length; i++) {
    if (content[i] === 'Pre-Run Actions ') {
      to = i;
      addMetaData(content, data, from, to);
      from = to;
    }
  }
  if (content[i] === 'Start the Run ') {
    to = i;
    addPreRunData(content, data, from, to);
    from = to;
  }
  if (content[i].includes('1) ')) {
    console.log(i)
    to = i;
    addPreRunData(content, data, from, to);
    from = to;
  }
}
}

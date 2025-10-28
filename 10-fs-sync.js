// file system module (sync version)

// read files
const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./Content/subfolder/first.txt', 'utf8');
const second = readFileSync('./Content/subfolder/second.txt', 'utf8');

console.log(first, second);

// write files

writeFileSync(
  './Content/subfolder/result-sync.txt',
  `Here is the result : ${first}, ${second}`, { flag: 'a' }
)

console.log('done with this task');
console.log('starting the next one');
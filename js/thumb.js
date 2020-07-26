import { read, ABSOLUTE_PATHS, CASELESS_SORT } from 'readdir';
 
const allTextFilesFilter = ['*.js'];
const options = ABSOLUTE_PATHS + CASELESS_SORT;
const logMatched = (contents) => contents.forEach(path => console.log(`Matched path: "${path}"`));
 
// as a step in a promise chain
read('some_path', allTextFilesFilter, options).then(logMatched);
 
// as an async/await
logMatched(await read('some-path', allTextFilesFilter));
 
// as a callback
read('some_path', allTextFilesFilter, options, (err, contents) => {
  logMatched(contents);
})


const readDir = require('readdir');
 
// an array of all JavaScript files in some_path/
readDir.readSync( 'img\slide', ['**.jpg'] );
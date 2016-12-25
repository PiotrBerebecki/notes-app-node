console.log('Starting the app!');

var fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command', command);
// process log in not user friendly so
// we will be using yargs instead
// console.log('process', process.argv);
console.log('yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognised');
}

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
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('---');
    console.log('Title:', note.title);
    console.log('Body:', note.body);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  var wasNoteRemoved = notes.removeNote(argv.title);
  var message = wasNoteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognised');
}

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

// Add a note
if (command === 'add') {
  var newNote = notes.addNote(argv.title, argv.body);
  if (newNote) {
    console.log('Note created');
    notes.logNote(newNote);
  } else {
    console.log('Note title taken');
  }
  
// List notes
} else if (command === 'list') {
  notes.getAll();
  
// Show body of a selected note
} else if (command === 'read') {
  let searchedNote = notes.getNote(argv.title);
  if (searchedNote) {
    console.log('Note found');
    notes.logNote(searchedNote);
  } else {
    console.log('Note not found');
  }

// Remove a note
} else if (command === 'remove') {
  let wasNoteRemoved = notes.removeNote(argv.title);
  let message = wasNoteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
  
// Handle unrecognised commnads
} else {
  console.log('Command not recognised');
}

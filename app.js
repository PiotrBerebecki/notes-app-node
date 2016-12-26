var fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var notes = require('./notes.js');

// In-build process log in not user friendly so
// we will be using yargs instead
// console.log('process', process.argv);

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't' // instead of --title we can now run -t
             // e.g. node app.js remove -t note2
};

const bodyOptions = {
  describe: 'Add note body',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help() // add help flag (node app.js add --help)
  .argv;
var command = argv._[0];

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
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));
  
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
  
// Handle unrecognised commands
} else {
  console.log('Command not recognised');
}

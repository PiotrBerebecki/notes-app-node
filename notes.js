console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    // try to read file as it may not exist
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var isNoteUnique = notes.every(note => note.title !== title);
  
  if (isNoteUnique) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => { 
  var notes = fetchNotes();
  var updatedNotes = notes.filter(note => note.title !== title);
  saveNotes(updatedNotes);
  // return true if note has been removed
  return notes.length !== updatedNotes.length;
};


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

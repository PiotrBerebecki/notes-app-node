// var obj = {
//   name: 'Piotr'
// };
// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name": "Piotr", "age": "25"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name, person.age);


const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// convert to JSON and write to file
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// read file and convert to object
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);




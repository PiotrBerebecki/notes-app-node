## Getting Started

    > git clone https://github.com/PiotrBerebecki/notes-app-node.git
    > cd notes-app-node
    > npm install
    
    // Add a note
    > node app.js add -t "Note 1" -b "Walk the dog"
    
    // List all notes
    > node app.js list
    
    // Retrieve a selected note
    > node app.js read -t "Note 1"
    
    // Remove a note
    > node app.js remove -t "Note 1"

// add //
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateTitles = notes.filter((obj) => {
    return obj.title === title;
  });
  console.log(duplicateTitles);
  if (duplicateTitles.length == 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("saved success");
  } else {
    console.log("error");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch {
    return [];
  }
};
const saveNotes = (notes) => {
  const saveData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", saveData);
};

/// delete ///
const deleteNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((obj) => {
    return obj.title !== title;
  });
  saveNotes(notesToKeep);
  console.log("Deleted");
};

// Read //
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((obj) => {
    return obj.title == title;
  });
  console.log(note);
  if (note) {
    console.log(note.body);
  } else {
    console.log("not found");
  }
};

// list //
const listNotes = () =>{
  const notes = loadNotes()
  notes.forEach((el)=> {
    console.log(el.title,el.body)
  });

}

module.exports = {
  addNote,
  deleteNote,
  readNote,
  listNotes
};

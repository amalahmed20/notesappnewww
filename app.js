// const fs =require ('fs')
// fs.writeFileSync('notes.txt' , 'helooo')
// console.log(fs.readFileSync('notes.txt').toString())
// fs.appendFile('notes.txt' , 'amal')
// console.log(fs.readFileSync('notes.txt'.toString()))

// const yargs = require("yargs");   /////////////////////
// const { require } = require("yargs");  //////////////////////////////

// const validator = require('validator')
// console.log(validator.isEmail('osama@gmail.com'))
// console.log(validator.isEmail('osama'))

// const { require } = require('yargs')
// const yargs = require('yargs')
// yargs.command({
//     command: 'add',
//     describe: 'Add note',
//     builder:{
//         title:{
//             describe:'this is title description in add command',
//             deamandOption:true,
//             type:'string'
//         }

//     },
//     body:{
//         describe:'this is body description in add command',
//             deamandOption:true,
//             type:'string'

//     },
//     handler:()=>{
//         console.log('Add notess')
//     },
// })

// yargs.command({
//     command: 'read',
//     describe: 'read note',
//     builder:{
//         title:{
//             describe:'this is title description in add command',
//             deamandOption:true,
//             type:'string'
//         }

//     },
//     body:{
//         describe:'this is body description in add command',
//             deamandOption:true,
//             type:'string'

//     },
//     handler:()=>{
//         console.log('read notess')
//     }
// })
// console.log(yargs.argv)

// const person = {
//     name:"amal",
//     age:'30'
// }
// console
// const personJson = JSON.stringify(car)
// console.log(personJson)

// const personObject = JSON.parse(personJson)
// console.log(personObject)
// console.log(personObject.name)

// const fs = require('fs')
// fs.writeFileSync('test.json',personJson)
// const x = fs.readFileSync('test.JSON').toString()
// console.log(x)

// Add //

const yargs = require("yargs");
const notes = require("./notes");


yargs.command({
  command: "add",
  describe: "Add notes",
  builder: {
    title: {
      describe: "This is title dsecription in add command",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is body dsecription in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    notes.addNote(x.title, x.body);
  },
});

// Delete //
yargs.command({
  command: "delete",
  describe: "delet note",
  builder: {
    title: {
      describe: "this is title description in delete command",
      deamandOption: true,
      type: "string",
    },
  },

  handler: (x) => {
    notes.deleteNote(x.title);
  },
});

// read //

yargs.command({
  command: "read",
  describe: "read note",
  builder: {
    title: {
      describe: "this is title description in read command",
      deamandOption: true,
      type: "string",
    },
  },

  handler: (x) => {
    notes.readNote(x.title);
  },
});

// List //
yargs.command({
      command:'list',
      describe:'List note',
      handler:()=>{
         notes.listNotes()
      }
  })

yargs.parse();

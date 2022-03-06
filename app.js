const chalk = require('chalk');
const notes = require('./notes');
const yargs= require('yargs');
const { argv } = require('process');


yargs.version('1.1.0');

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
    
});

//Create Remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

//Create List Command
yargs.command({
    command:'list',
    describe:'Listing Notes',
    handler(){
        console.log(chalk.cyanBright('Your Notes Title'));
        notes.listNotes();
    }
});

//Create Read Command
yargs.command({
    command:'read',
    describe:'Reading Note',
    builder:{
        title:{
            describe:'Get note from title',
            demandOption:false,
            type: 'string'
        }
    },
    handler(argv){
        // console.log(chalk.green('Body for title ')+chalk.red(argv.title)+chalk.green(' is  '));
        notes.readNote(argv.title);
    }
});



yargs.parse();
// yargs.argv;
// console.log(yargs.argv[0]);

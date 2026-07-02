console.log("HELLO");
console.log("WORLD");

// OUTPUT = HELLO
//          WORLD


process.stdout.write("hello ");
process.stdout.write("world");

// OUTPUT = hello world


let Prompt = require('prompt-sync')();
let a = Prompt("enter your name: ");

process.stdout.write("hello " + a);

//This loads Node.js's built-in readline module, which lets read input from the terminal (stdin).
const readline = require('readline'); //The module object is stored inn the variable "readline".

//Creates an interface for reading input and writing output.
const rl = readline.createInterface({ //The interface object is stored in the variable "rl".
    input: process.stdin, //This means that input will come from the keyboard.
    output: process.stdout //This means that output will go to the terminal screen.
});

rl.question("What is your name", (name) => { //Prompts the user with the question: "What is your name?".
    console.log(`My name is ${name}`) //Prints a greeting using the input the user typed (Uses a template literal (backticks `) to include the variable inside the string.).
    rl.close //Closes the readline interface — this is important to end the input stream and stop the program.
})
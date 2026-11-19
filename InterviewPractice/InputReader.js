const readline = require('readline'); // Imports the Readline module 

const rl = readline.createInterface({ // We will be creating i/o and O/P interface
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your Name: ", (ino) => {// Asking the User a Question
    console.log("Your name is: " + ino); // Print the User Input
    rl.close(); // Close the Interface
});
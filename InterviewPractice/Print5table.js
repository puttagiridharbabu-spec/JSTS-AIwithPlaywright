const readline  = require('readline');

const createInterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

createInterface.question("Enter your number: ", (ino) => {

    let number = Number(ino);

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }

    createInterface.close();
});

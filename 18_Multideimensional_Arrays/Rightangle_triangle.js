//1st Method- Using nested for loops and console.log()

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row.trim());
}

// 2nd Method - Using process.stdout.write()
let m = 5;

for (let k = 1; k <= m; k++) {
    for (let l = 1; l <= k; l++) {
        process.stdout.write("* ");
    }

    console.log();
}

// 3rd Method- Using repeat() with console.log()

let o = 5;

for (let i = 1; i <= o; i++) {
    console.log("* ".repeat(i).trim());
}

// 4th method- Using a single loop and string accumulation
let p = 5;
let row = "";

for (let i = 1; i <= p; i++) {
    row += "* ";
    console.log(row.trim());
}

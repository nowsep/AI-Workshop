/*
 * A wrapper in my version of the linux grep command called myGrep
 * To run it we need to: node mygrep.js <pattern> <filename>
 */
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
    console.log("Missing arguments");
    console.log(`Usage: node ${path.basename(process.argv[1])} <pattern> <filename>`);
    return;
}

let filename = process.argv[3];
let pattern = process.argv[2];
let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split('\n');

for (let line of lines) {
    if (line.includes(pattern)) {
        console.log(line);
    }
}
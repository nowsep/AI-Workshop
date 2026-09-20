/*
 * A wrapper in my version of the linux grep command called myGrep
 * To run it we need to: node mygrep.js <pattern> <filename>
 * A simplified version of the Linux head command called myHead
 * To run it we need to: node AIWorkshop.js <number> <filename>
 */
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
    console.log("Missing arguments");
    console.log(`Usage: node ${path.basename(process.argv[1])} <number> <filename>`);
    return;
}

let numberOfLines = Number(process.argv[2]);
let filename = process.argv[3];

let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');

let index = 0;

while (index < numberOfLines && index < lines.length) {
    console.log(lines[index]);
    index++;
}
// mycount.js - A simple command-line tool that counts the number of lines in a file.

const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
    console.log("Missing arguments");
    console.log(`Usage: node ${path.basename(process.argv[1])} <filename>`);
    return;
}

let filename = process.argv[2];

let content = fs.readFileSync(filename, 'utf-8');
let trimmedContent = content.trimEnd();
let lines = trimmedContent === '' ? [] : trimmedContent.split('\n');

console.log(`Number of lines: ${lines.length}`);
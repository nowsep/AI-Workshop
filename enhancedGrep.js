/*
 * enhancedGrep
 * Searches for a pattern in a file
 * and will also count the total matches.
 */

const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
    console.log("Missing arguments");
    console.log(`Usage: node ${path.basename(process.argv[1])} <pattern> <filename>`);
    return;
}
let pattern = process.argv[2];
let filename = process.argv[3];

let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split('\n');
let count = 0;

for (let line of lines) {
    if (line.includes(pattern)) {
        console.log(line);
        count++;
    }
}

console.log(`Total matches: ${count}`);
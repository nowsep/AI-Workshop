# Enhanced Grep Command

## Command Description

EnhancedGrep is a Node.js command-line tool that searches a file for a specific word or pattern. It prints every matching line and also shows the total number of matches.

It extends the basic grep command by adding a match counter.

This tool combines grep-style pattern searching with a counting feature that shows the total number of matches.

## How to Run

Syntax:

node enhancedGrep.js <pattern> <filename>

Example:

node enhancedGrep.js ERROR server.log

The program searches server.log for ERROR and prints all matching lines.

Example result:

Total matches: 23

## Testing

I tested the command with different patterns and edge cases.

| Test | Expected Result | Actual Result |
|---|---|---|
| ERROR | 23 matches | 23 matches |
| INFO | 77 matches | 77 matches |
| WARNING | 0 matches | 0 matches |
| Missing arguments | Show usage message | Usage message displayed |

## Testing Reflection

I tested the program with patterns that had many matches, no matches, and missing arguments. The tests helped me confirm that the command was working correctly. I also checked the output myself after running each command in the Codio terminal.

## AI-Assisted Programming

I used AI to help me understand how grep and head work and to explain errors I received while testing my programs. I also asked AI for ideas for test cases and edge cases.

I made the changes in Codio, ran the commands myself, and checked whether the results were correct. One issue I found earlier was that my grep program printed the whole file instead of only matching lines, so I reviewed the code and corrected the logic.

AI was useful for explanations and testing ideas, but I still had to understand the code, run the tests, and verify the results myself.

## Test Screenshots

Screenshots of the command running in Codio show:

- ERROR pattern: 23 matches
- INFO pattern: 77 matches
- WARNING pattern: 0 matches
- Missing arguments: usage message displayed
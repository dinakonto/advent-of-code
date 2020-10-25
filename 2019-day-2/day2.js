/*
 * Challenge from Advent of Code
 * https://adventofcode.com/2019/day/2
 *
 */

// ULTIMATE QUESTION:
// What value is left at position 0 after the program halts?

// Load the elements in intCode array from a text file.
const fs = require('fs');
const content = fs.readFileSync('inputs.txt','utf-8');
// REAL VALUES
let baseCode = content.split(',').map(Number);
let intCode = [...baseCode];
// TEST VALUES
// let intCode = [
        // 1,0,0,0,99
        // becomes 2,0,0,0,99 (1 + 1 = 2)
        //
        // 2,3,0,3,99
        // becomes 2,3,0,6,99 (3 * 2 = 6)
        //
        // 2,4,4,5,99,0
        // becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
        //
        // 1,1,1,4,99,5,6,0,99
        // becomes 30,1,1,4,2,5,6,0,99
        //
        // 1,9,10, 3,2,3,11,0,99,30,40,50
        // becomes 3500,9,10,70,2,3,11,0,99,30,40,50
// ];

function runProgram(code) {
  for (let i = 0; i < code.length; i += 4) {

    // Opcode is 1 (add)
    if (code[i] === 1) {
      let sum = code[code[i+1]] + code[code[i+2]];
      code.splice(code[i+3], 1, sum);
    }

    // Opcode is 2 (multiply)
    else if (code[i] === 2) {
      let sum = code[code[i+1]] * code[code[i+2]];
      code.splice(code[i+3], 1, sum);
    }

    // Opcode is 99 (end)
    else if (code[i] === 99) {
      let answer = code[0];
      return answer;
    }

    // Opcode is invalid
    else {
      console.log(`Error for ${code[i]}`);
      return;
    }
  }
}

function replaceValues(code, one, two) {
  code.splice(1,1,one) + code.splice(2,1,two);
  return code;
}

function solvePartOne() {
  let code = replaceValues(intCode, 12, 2);
  let result = runProgram(code);
  console.log(`PART ONE:
          Result: ${result}`);
  return result;
}

function solvePartTwo() {
  let noun, verb, code, result;

  for (noun = 0; noun <= 99; noun++) {
    for (verb = 0; verb <= 99; verb++) {
      intCode = [...baseCode]; // Reset the intcode
      code = replaceValues(intCode, noun, verb);
      result = runProgram(code);

      if (result === 19690720) {
        console.log(`PART TWO:
          Result: ${result}
          Noun: ${noun}
          Verb: ${verb}`)
      }
    }
  }
}

solvePartOne();
solvePartTwo();

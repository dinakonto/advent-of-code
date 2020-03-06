/*
 * Challenge from Advent of Code
 * https://adventofcode.com/2019/day/2
 *
 */

// ULTIMATE QUESTION:
// What value is left at position 0 after the program halts?

// TO DO:
// Something is up - second calculation always places the result one spot too high.
// Could be conflict between x values for counting vs displaying value? idk.

// Create an array to hold the intCode program
const intCode = [
  // REAL VALUES
  // 1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,6,19,23,1,23,13,27,2,6,27,31,1,5,31,35,2,10,35,39,1,6,39,43,1,13,43,47,2,47,6,51,1,51,5,55,1,55,6,59,2,59,10,63,1,63,6,67,2,67,10,71,1,71,9,75,2,75,10,79,1,79,5,83,2,10,83,87,1,87,6,91,2,9,91,95,1,95,5,99,1,5,99,103,1,103,10,107,1,9,107,111,1,6,111,115,1,115,5,119,1,10,119,123,2,6,123,127,2,127,6,131,1,131,2,135,1,10,135,0,99,2,0,14,0

  // TEST VALUES
                   // 1,0,0,0,99
        // becomes 2,0,0,0,99 (1 + 1 = 2).
        //
                   // 2,3,0,3,99
        // becomes 2,3,0,6,99 (3 * 2 = 6).
        //
                   // 2,4,4,5,99,0
        // becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
        //
                    // 1,1,1,4,99,5,6,0,99
        // becomes 30,1,1,4,2,5,6,0,99.
                      1,9,10, 3,2,3,11,0,99,30,40,50
        // becomes 3500,9,10,70,2,3,11,0,99,30,40,50
];

let resultCode = [...intCode];

// console.log(
// `Intcode starts as:
// ${intCode}
// --------------------
// `
// );

// `i` = the index of the Opcode. It jumps 4 each loop.
for( let i = 0; i < intCode.length; i += 4) {
  let sum = 0;
  // console.log(`sum = ${sum}`);
  // console.log(`intCode = ${intCode}`)
  // console.log(`resultCode = ${resultCode}`)

  // If the Opcode is 1
  if (intCode[i] === 1) {
    console.log(`---> Running Opcode 1`);
    let x = i;
//     console.log(
// `----------
// Running Opcode ${intCode[x]}
// ADD the numbers at index ${intCode[x+1]} and index ${intCode[x+2]} together
// and put the result at index ${intCode[x+3]}.
// `);
    sum = intCode[intCode[x+1]] + intCode[intCode[x+2]];
    resultCode.splice(resultCode[x+3], 1, sum);

    console.log(
`Was ${intCode}
Now ${resultCode}`);

//     console.log(`Initial code read: ${intCode}
// Result reads: ${resultCode}`);
  }

  // If the Opcode is 2
  if (intCode[i] === 2) {
    let x = i;
    console.log(`---> Running Opcode 2`);

    // Description here
//     console.log(
// `--------------------
// ${intCode[x]} is the second Opcode.
//       So we need to MULTIPLY the numbers at index ${intCode[x+1]} and index ${intCode[x+2]} together
//       and put the result at index ${intCode[x+3]}.
//       `);

    // console.log(`Starting at index #${x}`)
    // console.log(`Program reads: ${intCode}`);
    // Multiple the numbers together
    sum = intCode[intCode[x+1]] * intCode[intCode[x+2]];
    // console.log(`Result is: ${sum}`);
    // And put the result in the right spot
    resultCode.splice(resultCode[x+3], 1, sum);
    // console.log(`Program reads: ${resultCode}
      // `);

      console.log(
  `Was ${intCode}
  Now ${resultCode}`);

  
  }

  // If the Opcode is 99
  else if (intCode[i] === 99) {
    // Do this
    let x = i;
    console.log(`---> Running Opcode 99`);
    console.log(
`Was ${intCode}
Now ${resultCode}`);
//     console.log(
// `--------------------
// Running Opcode ${intCode[x]}
//       --------------------
//       STOP THE PROGRAM.
      // IntCode started as ${intCode}
      // Result is ${resultCode}
//       --------------------`);
      break;
  }

}

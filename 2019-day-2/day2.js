/*
 * Challenge from Advent of Code
 * https://adventofcode.com/2019/day/2
 *
 */

// ULTIMATE QUESTION:
// What value is left at position 0 after the program halts?


// Create an array to hold the program code
let intCode = [
  // REAL VALUES
  1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,6,19,23,1,23,13,27,2,6,27,31,1,5,31,35,2,10,35,39,1,6,39,43,1,13,43,47,2,47,6,51,1,51,5,55,1,55,6,59,2,59,10,63,1,63,6,67,2,67,10,71,1,71,9,75,2,75,10,79,1,79,5,83,2,10,83,87,1,87,6,91,2,9,91,95,1,95,5,99,1,5,99,103,1,103,10,107,1,9,107,111,1,6,111,115,1,115,5,119,1,10,119,123,2,6,123,127,2,127,6,131,1,131,2,135,1,10,135,0,99,2,0,14,0


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
                      // 1,9,10, 3,2,3,11,0,99,30,40,50
        // becomes 3500,9,10,70,2,3,11,0,99,30,40,50
];

// COMMENT OUT THIS LINE BEFORE RUNNING TEST VALUES
// It performs the final line of the word problem
intCode.splice(1,1,12) + intCode.splice(2,1,2);


for( let i = 0; i < intCode.length; i += 4 ) {

  // If the Opcode is 1
  if (intCode[i] === 1) {
    let sum = intCode[intCode[i+1]] + intCode[intCode[i+2]];
    intCode.splice(intCode[i+3], 1, sum);
  }

  // If the Opcode is 2
  else if (intCode[i] === 2) {
    let sum = intCode[intCode[i+1]] * intCode[intCode[i+2]];
    intCode.splice(intCode[i+3], 1, sum);
  }

  // If the Opcode is 99
  else if (intCode[i] === 99) {
    console.log(
      `ANSWER IS: ${intCode[0]}

Full final program code is: ${intCode}`);
      break;
  }

  // If it's anything else
  else {
    console.log(`RUH ROH, something went horribly wrong.`);
    break;
  }

}

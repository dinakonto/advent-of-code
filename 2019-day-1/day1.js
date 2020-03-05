/*
 * Challenge from Advent of Code
 * https://adventofcode.com/2019/day/1
 *
 */

var totalPartOne = 0;
var totalPartTwo = 0;
// Load the elements in moduleMass array from a text file.
var fs = require('fs');
var content = fs.readFileSync('inputs.txt','utf-8');
var moduleMass = content.split('\n');

// Function to run the calculation on a single input
function calcFuel(mass) {
  var fuel = Math.floor(mass / 3) - 2;
  return fuel;
}

// STEPS FOR PART 1
// For each element in the moduleMass array
for (var x = 0; x < moduleMass.length; x++) {
  // Run calcFuel on it
  var singleCalc = calcFuel(moduleMass[x]);
  // Add the result to totalFuel
  totalPartOne += singleCalc;
}

// STEPS FOR PART 2
// for each element in the moduleMass array
for (var x = 0; x < moduleMass.length; x++) {
  // calcFuel on the moduleMass
  var moduleFuel = calcFuel(moduleMass[x]);
  // add that moduleFuel to the totalFuel
  totalPartTwo += moduleFuel;
  // create a new variable to calculate the extraFuel needed for the moduleFuel
  var extraFuel = moduleFuel;
  //LOOP:
  // if result of calcFuel on input >0
  while (calcFuel(extraFuel) > 0) {
    // add result to the total
    totalPartTwo += calcFuel(extraFuel);
    // result then becomes the new input
    extraFuel = calcFuel(extraFuel);
  };
};

// Printing results to the console
console.log("Fuel required for modules alone: " + totalPartOne + "\n" +
            "Extra fuel required to carry that fuel: " + (totalPartTwo-totalPartOne) + "\n" +
            "Total fuel required is: " + totalPartTwo);

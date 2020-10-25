/*
 * Challenge from Advent of Code
 * https://adventofcode.com/2019/day/1
 *
 */

let totalPartOne = 0;
let totalPartTwo = 0;

// Load the elements in moduleMass array from a text file.
const fs = require('fs');
const content = fs.readFileSync('inputs.txt','utf-8');
const moduleMass = content.split('\n');

// Calculate how much fuel is required to carry a given mass
function fuelCalculation(mass) {
  let fuel = Math.floor(mass / 3) - 2;
  return fuel;
}

// PART ONE
// What is the sum of the fuel requirements for all of the modules
// on your spacecraft (inputs.txt)?
function solvePartOne() {
  moduleMass.forEach(mass => {
    let thisCalc = fuelCalculation(mass);
    totalPartOne += thisCalc;
  })
  console.log('PART ONE: Fuel required for modules alone = ' + totalPartOne);
  return totalPartOne;
}

// PART TWO
// What is the sum of the fuel requirements for all of the modules on your
// spacecraft when also taking into account the mass of the fuel required
// to carry the fuel itself?
function solvePartTwo() {
  moduleMass.forEach(mass => {
    let moduleFuel = fuelCalculation(mass);
    totalPartTwo += moduleFuel;
    let extraFuel = moduleFuel;
    while (fuelCalculation(extraFuel) > 0) {
      totalPartTwo += fuelCalculation(extraFuel);
      extraFuel = fuelCalculation(extraFuel);
    }
  })
  console.log('PART TWO: Total fuel required is = ' + totalPartTwo);
  return totalPartTwo;
}

// RUN SOLUTION
solvePartOne();
solvePartTwo();

/*
 * Challenge from Advent of Code
 * https://adventofcode.com/2019/day/1
 *
 */

/* TO DO
 * Part 2:
 *    For each module mass, calculate its fuel and add it to the total.
 *    Then, treat the fuel amount you just calculated as the input mass
 *    and repeat the process, continuing until a fuel requirement is zero
 *    or negative.
 *
 *    What is the sum of the fuel requirements for all of the modules
 *    on your spacecraft when also taking into account the mass of the
 *    added fuel? (Calculate the fuel requirements for each module separately,
 *    then add them all up at the end.)
 */

var totalFuel = 0;
var moduleMass = [78207,89869,145449,73634,78681,81375,131482,126998,50801,115839,77949,53203,146099,56912,59925,132631,115087,89543,123234,108110,109873,81923,124264,87981,106554,147239,73615,72609,129684,84175,64915,98124,74391,55211,120961,119116,148275,89605,115986,120547,50299,137922,78906,145216,80424,122610,61408,97573,127533,116820,76068,77400,117943,85231,102442,62002,58761,56479,98200,85971,73985,88908,82719,120604,83378,88241,122574,76731,99810,137548,102617,105352,137585,83238,118817,149419,107629,6893,56049,70693,83844,76413,87021,90259,124289,102527,139625,106607,120241,101098,66142,96591,82277,142297,116671,131881,94861,79741,73561,115214]

// Function to run the calculation on a single input
function calcFuel(mass) {
  var fuel = Math.floor(mass / 3) - 2;
  return fuel;
}

// STEPS FOR PART 1
// Loop through the array
for (var x = 0; x < moduleMass.length; x++) {
  // Run calcFuel for each number
  var singleCalc = calcFuel(moduleMass[x]);
  // Add this result to the total
  totalFuel += singleCalc;
}

// STEPS FOR PART 2

// for each module moduleMass
  // calculate its fuel

  //LOOP:
    // add result to the total
    // calculate result's fuel
      // if result is >0

      // else break

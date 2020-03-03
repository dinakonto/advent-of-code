/* TO DO
 * Test that loop gives the right output with test numbers
 *    Expected total fuel: 34,241
 * Copy real mass inputs into the array from here
 *  https://adventofcode.com/2019/day/1/input
 */

var totalFuel = 0;
var massInputs = [
  12,
  14,
  1969,
  100756
]

// Run the calculation on one input
function calcFuel(mass) {
  var fuel = Math.floor(mass / 3) - 2;
  return fuel;
}

// Loop through the array
for (var i = 0; i < massInputs.length; i++) {
  // Run calcFuel for each number
  var singleCalc = calcFuel(massInputs[i]);
  // Add this result to the total
  totalFuel += singleCalc;
}

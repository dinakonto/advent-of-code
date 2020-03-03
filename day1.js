/* TO DO
 * Add an array housing all mass inputs.
 * Create a loop that
 *    - Cycles through the array
 *    - runs calcFuel for each number
 *    - adds the output of each calcFuel together
 */

function calcFuel(mass) {
  var fuel = Math.floor(mass / 3) - 2;
  return fuel;
}

calcFuel(100756);

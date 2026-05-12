/*

NOTES: Parse and Locate Numbers

 str.split('\n') - array of rows
 row.split('') - split into chars
 forEach - loop over rows and columns
 !isNaN(parseInt(char))) - check for numbers
    const.push[]


*/

function parseNumbers(puzzleString) {
  // TODO: return array of {row, col, value} for every cell that is a digit (0-9)
  const result = []
  const rows = puzzleString.split("\n")

  for (let r = 0; r < rows.length; r++) {
    const cols = rows[r].split("")

    for (let c = 0; c < cols.length; c++) {
        if (cols[c] >= '0' && cols[c] <= '9') {
            result.push({ row: r, col: c, value: parseInt(cols[c])})
        }
    }

  }

  return result
}

// ----- TEST CASES -----
const test1 = "200\n0..";
console.log(parseNumbers(test1));
// Expected: [
//   { row: 0, col: 0, value: '2' },
//   { row: 0, col: 1, value: '0' },
//   { row: 1, col: 0, value: '0' }
// ]

const test2 = "123\n456";
console.log(parseNumbers(test2));
// Expected: 6 objects (all cells)

const test3 = "...\n...";
console.log(parseNumbers(test3));
// Expected: [] (no digits)
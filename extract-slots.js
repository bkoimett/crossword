/*

NOTES: Extract slots


*/
function isDigit(ch) { return ch >= '0' && ch <= '9'}

function extractSlots(grid) {
  // grid is 2D array of characters (digits or '.')
  // return array of slot objects: {row, col, len, dir}
  const slots = [];
  const rows = grid.length, cols = grid[0].length 

  for (let r = 0; r < rows; r++) {
    for (let c =0; c < cols; c++) {
        if (!isDigit(grid[r][c])) continue
        
        // find across
        if ( c === 0 || grid[r][c-1] === '.') {
            // initialize word counter
            let len = 0
            while ( c + len < cols && isDigit(grid[r][c+len])) len++
            if (len > 1 ) slots.push({row: r, col: c, len, dir: "across"})
        }

        // find down
        if ( r === 0 || grid[r-1][c] === ".") {
            let len = 0
            while ( r + len < rows && isDigit(grid[r+len][c])) len++
            if (len > 1) slots.push({row: r, col: c, len, dir: 'down'});        
        }
    }
  }

//   console.log(cols, rows)
  return slots
}

// ----- TEST CASES -----
const puzzle = `2001
0..0
1000
0..0`;
const grid = puzzle.split('\n').map(row => row.split(''));
console.log(extractSlots(grid));
// Expected: 4 slots (2 across, 2 down)
// Example: 
// across: (0,0) len=4, (2,0) len=4?
// Actually row2 "1000" → at (2,0) '1' starts across? left of it (2,-1) out of bounds → yes, length? walk right: '1','0','0','0' all digits → len=4
// down: (0,0) down? above ( -1 ) out → yes, walk down: (0,0) '2',(1,0)'0',(2,0)'1',(3,0)'0' → len=4; (0,3) '1' down? above ( -1,3) out? Actually (0,3) '1' above is out → yes, walk down: (0,3)'1',(1,3)'0',(2,3)'0',(3,3)'0'? Wait row3 "0..0" → col3='0' yes → len=4.
// So total 4 slots. Good.
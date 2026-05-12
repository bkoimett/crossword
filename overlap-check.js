function canPlace(slot, word, grid) {
  // grid contains '.' or letters (from previous placements)
  // return true if word can be placed without conflict

  const { row, col, len, dir } = slot

  if ( word.length != len ) return false

  for (let i = 0; i < len; i++) {
    let r = row
    let c = col

    if (dir === "across") {
        c = col + i
    } else {
        r = row + i
    }

    const gridChar = grid[r][c]
    const wordChar = word[i]

    if ( gridChar !== "." && gridChar !== wordChar) {
        return false
    }
  }

  return true
}

// ----- TEST CASES -----
// Setup grid (3x3) with digits and a placeholder letter
let grid = [
  ['a', '.', 'b'],
  ['.', 'c', '.'],
  ['d', '.', 'e']
];
let slot = {row: 0, col: 0, len: 3, dir: 'across'};
console.log(canPlace(slot, 'abc', grid)); // false because at col2 grid[0][2]='b' vs word 'c'? Actually word 'abc' → index2='c' vs grid 'b' -> false
console.log(canPlace(slot, 'a.b', grid)); // false because '.' would conflict with 'b'? Actually check: word 'a.b' means a, ., b -> second char '.' matches grid '.'? It should match because grid[0][1]='.' is empty, so okay; but third char 'b' matches grid 'b' -> true. However we need exact letter match; '.' in word is not allowed because words have only letters. So ignore.
// Better test:
let grid2 = [
  ['a', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];
let slot2 = {row: 0, col: 0, len: 3, dir: 'across'};
console.log(canPlace(slot2, 'abc', grid2)); // true (a matches a, rest empty)
console.log(canPlace(slot2, 'axc', grid2)); // false (x vs .? Actually . is empty so okay wait, . means empty so any letter can go. But at index0 'a' matches 'a', index1 'x' vs '.' -> allowed, index2 'c' vs '.' allowed -> true? That would be wrong because we must not overwrite existing letter? No, '.' is empty, so any letter is fine. So canPlace returns true. Good.)
// More realistic: grid with existing letter conflict
let grid3 = [
  ['a', 'b', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];
let slot3 = {row: 0, col: 0, len: 3, dir: 'across'};
console.log(canPlace(slot3, 'abc', grid3)); // true? 'a' matches 'a', 'b' matches 'b', 'c' vs '.' good -> true.
console.log(canPlace(slot3, 'axc', grid3)); // false because 'x' vs 'b' at index1
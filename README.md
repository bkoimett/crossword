# Crossword Solver

## File structure
crossword/
├── crosswordSolver.js   # main function
├── parser.js            # grid & slot extraction
├── backtrack.js         # recursive solver
├── validator.js         # input validation
├── index.js             # entry point (optional)
└── test/                # your own test cases

## Team workflow (issue → feature)
1. Create a new issue for each feature (list below).
2. Assign to one member, create a branch `feature/issue-N`.
3. Write code + unit tests (simple console logs).
4. Open a pull request, have partner review & merge.
5. Close issue.

## Issues to create (order)
1. `parsePuzzle` – convert string to 2D array, validate no ragged rows.
2. `extractSlots` – find all across/down slots with lengths.
3. `canPlaceWord` – check overlap compatibility.
4. `placeWord` / `removeWord` – modify grid temporarily.
5. `backtrackSolver` – finds all solutions (counting).
6. `crosswordSolver` – orchestrates everything, prints result or "Error".
7. `errorHandling` – invalid puzzle, wrong word list, zero/multiple solutions.

// W2D3 Pair Programming - Word Search : Monica, Taehee, Yevheniia

/*
  1. Check to find the word horizontally(v) and vertically( )
  2. Return true if the word is found, and return false if the word is not found
*/
const wordSearch = (letters, word) => {
  //if there is no array
  if (letters === undefined) {
    return undefined;
  }
  //if the array is empty
  if (letters.length === 0) {
    return 'Empty array';
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  console.log("verticalJoin: ", verticalJoin);
  console.log("horizontalJoin: ", horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let r of verticalJoin) {
    if (r.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let result = [];
  let numRows = matrix.length;
  let numCols = matrix[0].length;

  // matrix[i][j] ---> matrix[j][i]

  for (let j = 0; j < numCols; j++) {
    // console.log('J: ', j);
    result.push([]);
    for (let i = 0; i < numRows; i++) {
      // console.log('i, j:', i,j)
      result[j].push(matrix[i][j]);
    }
  }
  // console.log(result);
  return result;
};
// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el);
    }
    process.stdout.write("\n");
  }
};


console.log("Test1");
console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK'));

console.log("Test2");
console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD'));

module.exports = wordSearch;


















function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.
  if (matrix[from][to] === 1) return true;
  else {
    let visited = [from];
    for (let i = 0; i < matrix[from].length; i++) {
      if (matrix[from][i] === 1 && !visited.includes(i)) {
        getDirections(matrix, i, to);
      }
    }
    return false;
  }
}
const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];
const result1 = getDirections(matrix, 0, 2);

console.log(result1);

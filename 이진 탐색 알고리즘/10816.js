// 백준 문제풀이용 코드
let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let n = input[1].split(" ").map(Number);
let m = input[3].split(" ").map(Number);
n.sort((a, b) => a - b);
const lowerBound = (arr, target, start, end) => {
  const mid = parseInt((start + end) / 2);

  if (start > end) return arr[mid];
  if (arr[mid] === target)
    return arr[mid - 1] === target
      ? lowerBound(arr, target, start, mid - 1)
      : mid;
  if (arr[mid] > target) {
    end = mid - 1;
  }
  if (arr[mid] < target) {
    start = mid + 1;
  }
  return lowerBound(arr, target, start, end);
};

const upperBound = (arr, target, start, end) => {
  const mid = parseInt((start + end) / 2);
  if (start > end) return arr[mid];
  if (arr[mid] === target)
    return arr[mid + 1] === target
      ? upperBound(arr, target, mid + 1, end)
      : mid + 1;
  if (arr[mid] > target) {
    end = mid - 1;
  } else if (arr[mid] < target) {
    start = mid + 1;
  }
  return upperBound(arr, target, start, end);
};
let answer = "";
for (let i = 0; i < m.length; i++) {
  answer +=
    upperBound(n, m[i], 0, n.length - 1) -
    lowerBound(n, m[i], 0, n.length - 1) +
    " ";
}
console.log(answer);

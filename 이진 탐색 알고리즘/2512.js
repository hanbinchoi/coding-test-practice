// 이진탐색 알고리즘.
const findPoint = (start, end, total) => {
  // 상한선은 초기값과 최대값의 중간으로 정함. (1,150 => 75)
  const mid = parseInt((start + end) / 2);
  // 상한선에 맞추어 각 예산 재분배.
  const mappedArr = arr.map((ele) => (ele > mid ? mid : ele));
  const sum = mappedArr.reduce((acc, cur) => acc + cur);
  // 재분배한 예산에 합이 총 예산보다 적으면 시작점을 현재 예산액으로 설정.
  if (sum < total) {
    return findPoint(mid, end, total);
  }
  // 재분배한 예산에 합이 총 예산보다 크거나 같으면 우리가 구하려는 예산액과 가장 가까운 값.
  else {
    return Math.max(...mappedArr);
  }
};

// 백준 문제풀이용 코드
let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let total = Number(input[2]);

// 모든 예정이 배정될 수 있는 경우 예외처리
const sum = arr.reduce((acc, cur) => acc + cur);
const max = Math.max(...arr);
// 예산은 요청한 금액의 최대값이 된다.
if (sum <= total) console.log(max);
else {
  // 이진탐색을 위한 시작점과 끝점 찾기.
  // 모든 요청이 배정될 수 없을때는 가장 작은 값과 가장 큰값-1 사이에서 찾는다. (큰값은 배정될 수 없는게 확정이기 때문에)
  let start = 1;
  let end = max - 1;
  // 이진탐색을 통해 예산액에 가장 가까운 금액을 찾는다.
  let point = findPoint(start, end, total);
  while (true) {
    // 찾아온 값을 통해 다시 예산 분배.
    const mappedArr = arr.map((ele) => (ele > point ? point : ele));
    const sum = mappedArr.reduce((acc, cur) => acc + cur);
    // 재분배한 예산의 합이 같거나 작으면 더이상 찾을 필요없다.
    if (sum <= total) break;
    // 예산이 크면 point를 1씩 줄여서 다시 확인.
    else point--;
  }

  console.log(point);
}

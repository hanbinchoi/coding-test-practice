let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

// 회의 횟수
const time = Number(input[0]);
let discussion = [];
for (let i = 0; i < time; i++) {
  const d = input[i + 1].split(" ").map(Number);

  discussion.push(d);
}
// 종료시점, 시작시점을 기준으로 정렬
discussion.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});
let answer = 1;
let cur = 0;
for (let i = 1; i < time; i++) {
  if (discussion[cur][1] <= discussion[i][0]) {
    cur = i;
    answer++;
  }
}
console.log(answer);

let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

// 돈을 인출하는데 걸리는 시간
const time = input[1].split(" ").map(Number);
// 전체 걸리는 시간
time.sort((a, b) => a - b);

let timeArr = [];
for (i of time) {
  if (timeArr.length === 0) timeArr.push(i);
  else timeArr.push(i + timeArr[timeArr.length - 1]);
}
let answer = 0;
for (let i = 0; i < timeArr.length; i++) {
  answer += timeArr[i];
}
console.log(answer);

/*
sort() vs sort((a,b) => a-b)
sort() -> 원소를 문자열로 바꾸고 유니코드에 의해서 정렬
sort((a,b) => a-b) -> a-b의 값이 0 보다 작은경우 a를 b보다 낮은 값으로 인식하고 정렬
*/

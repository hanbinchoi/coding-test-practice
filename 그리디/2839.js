// 백준 문제풀이용 코드
let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

// 입력받은 n
let n = Number(input[0]);
// 가지고 가는 봉지 수
let count = 0;
let flag = true;

while (n >= 0) {
  // 만약 5로 나눠지거나 0 이면
  if (n % 5 == 0 || n === 0) {
    // count는 5로 나눈값 더해줌
    count += n / 5;
    console.log(count);
    flag = false;
    break;
  }
  // 안나눠지면 3빼줌 -> 3크기의 설탕봉지 1개를 챙겼다 -> count도 +1
  n -= 3;
  count++;
}
flag ? console.log(-1) : null;

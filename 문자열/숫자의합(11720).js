// [문제 이름]
// : 숫자의 합

// [문제 설명]
// : N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/11720

// 백준 문제풀이용 코드
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  const [a, b] = input[i].split(" ");
  const answer = b.split("").reduce((acc, cur) => acc + cur.repeat(a), "");
  console.log(answer);
}

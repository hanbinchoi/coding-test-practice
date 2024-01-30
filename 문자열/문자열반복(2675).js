// [문제 이름]
// : 문자열 반복

// [문제 설명]
// : 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

// [문제 링크]
// : https://www.acmicpc.net/problem/2675

// 백준 문제풀이용 코드
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")[1]
  .split("")
  .map((ele) => +ele);

console.log(input.reduce((a, b) => a + b, 0));

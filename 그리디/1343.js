// [문제 이름]
// : 폴리오미노

// [문제 설명]
// : 민식이는 다음과 같은 폴리오미노 2개를 무한개만큼 가지고 있다. AAAA와 BB

// 이제 '.'와 'X'로 이루어진 보드판이 주어졌을 때, 민식이는 겹침없이 'X'를 모두 폴리오미노로 덮으려고 한다. 이때, '.'는 폴리오미노로 덮으면 안 된다.

// 폴리오미노로 모두 덮은 보드판을 출력하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1343

let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

const board = input[0].split(".");
let answer = [];
for (i of board) {
  if (i.length % 2 !== 0) {
    answer = -1;
    break;
  } else {
    const [a, b] = [Math.floor(i.length / 4), (i.length % 4) / 2];

    answer.push("AAAA".repeat(a) + "BB".repeat(b));
  }
}
console.log(answer === -1 ? -1 : answer.join("."));

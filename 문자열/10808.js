// [문제 이름]
// : 알파벳 개수

// [문제 설명]
// : 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/10808

const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split("\n");

const s = input[0];

const code = new Array(26).fill(0);

for (let i = 0; i < s.length; i++) {
  const word = s.charCodeAt(i) - 97;
  code[word] += 1;
}
console.log(code.join(" "));

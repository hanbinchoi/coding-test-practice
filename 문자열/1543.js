// [문제 이름]
// : 문서 검색

// [문제 설명]
// : 세준이는 영어로만 이루어진 어떤 문서를 검색하는 함수를 만들려고 한다. 이 함수는 어떤 단어가 총 몇 번 등장하는지 세려고 한다. 그러나, 세준이의 함수는 중복되어 세는 것은 빼고 세야 한다. 예를 들어, 문서가 abababa이고, 그리고 찾으려는 단어가 ababa라면, 세준이의 이 함수는 이 단어를 0번부터 찾을 수 있고, 2번부터도 찾을 수 있다. 그러나 동시에 셀 수는 없다.

// 세준이는 문서와 검색하려는 단어가 주어졌을 때, 그 단어가 최대 몇 번 중복되지 않게 등장하는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1543

const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split("\n");

input[0] = input[0].split("");
let start = 0;
let end = input[1].length;
let count = 0;

while (true) {
  if (input[0].slice(start, end).join("") === input[1]) {
    input[0].splice(start, input[1].length);
    count++;
  } else {
    start++;
    end++;
  }
  if (end > input[0].length) break;
}

console.log(count);

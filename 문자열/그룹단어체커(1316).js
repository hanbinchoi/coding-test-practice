// [문제 이름]
// : 그룹 단어 체커

// [문제 설명]
// : 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1316

// 백준 문제풀이용 코드
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const caseCount = Number(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= caseCount; i++) {
  const word = input[i];
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    countGroupWord += 1;
  }
}

console.log(countGroupWord);

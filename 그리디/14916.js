// [문제 이름]
// : 거스름돈

// [문제 설명]
// : 춘향이는 편의점 카운터에서 일한다.

// 손님이 2원짜리와 5원짜리로만 거스름돈을 달라고 한다. 2원짜리 동전과 5원짜리 동전은 무한정 많이 가지고 있다. 동전의 개수가 최소가 되도록 거슬러 주어야 한다. 거스름돈이 n인 경우, 최소 동전의 개수가 몇 개인지 알려주는 프로그램을 작성하시오.

// 예를 들어, 거스름돈이 15원이면 5원짜리 3개를, 거스름돈이 14원이면 5원짜리 2개와 2원짜리 2개로 총 4개를, 거스름돈이 13원이면 5원짜리 1개와 2원짜리 4개로 총 5개를 주어야 동전의 개수가 최소가 된다.

// [문제 링크]
// : https://www.acmicpc.net/problem/14916

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

//* 메인함수
// const [n, k] = input[0].split(' ').map((num) => parseInt(num));
const n = parseInt(input[0]);

let answer = sol(n);
console.log(answer);
//* 로직함수
function sol(n) {
  let money = n;
  let answer = 0;
  divideByFive = Math.floor(money / 5);

  for (let i = divideByFive; i >= 0; i--) {
    money = money - i * 5;
    answer += i;
    if (money % 2 === 0) {
      answer += money / 2;
      return answer;
    }
    answer = 0;
    money = n;
  }

  return -1;
}

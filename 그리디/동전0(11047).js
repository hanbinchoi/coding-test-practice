// [문제 이름]
// : 동전0

// [문제 설명]
// : 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.

// 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/11047

// 백준 문제풀이용 코드
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs.readFileSync(filePath).toString();

let [n, k] = input.split("\n")[0].split(" ").map(Number);
const coins = input
  .split("\n")
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;

while (coins.length) {
  if (coins[0] > k) coins.shift();
  else {
    answer = answer + parseInt(k / coins[0]);
    k = k % coins[0];
    coins.shift();
  }
  if (k == 0) break;
}

console.log(answer);

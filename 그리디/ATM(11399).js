// [문제 이름]
// : ATM

// [문제 설명]
// : 인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM앞에 N명의 사람들이 줄을 서있다. 사람은 1번부터 N번까지 번호가 매겨져 있으며, i번 사람이 돈을 인출하는데 걸리는 시간은 Pi분이다.

// 줄을 [2, 5, 1, 4, 3] 순서로 줄을 서면, 2번 사람은 1분만에, 5번 사람은 1+2 = 3분, 1번 사람은 1+2+3 = 6분, 4번 사람은 1+2+3+3 = 9분, 3번 사람은 1+2+3+3+4 = 13분이 걸리게 된다. 각 사람이 돈을 인출하는데 필요한 시간의 합은 1+3+6+9+13 = 32분이다. 이 방법보다 더 필요한 시간의 합을 최소로 만들 수는 없다.

// 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때, 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/11399

// 백준 문제풀이용 코드
let fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// 돈을 인출하는데 걸리는 시간
const time = input[1].split(" ").map(Number);
// 전체 걸리는 시간
time.sort((a, b) => a - b);

let answer = 0;
let spent = 0;
for (i of time) {
  answer += i;
  spent += answer;
}

console.log(spent);

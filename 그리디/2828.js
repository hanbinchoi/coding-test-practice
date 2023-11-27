// [문제 이름]
// : 사과 담기 게임

// [문제 설명]
// : 상근이는 오락실에서 바구니를 옮기는 오래된 게임을 한다. 스크린은 N칸으로 나누어져 있다. 스크린의 아래쪽에는 M칸을 차지하는 바구니가 있다. (M<N) 플레이어는 게임을 하는 중에 바구니를 왼쪽이나 오른쪽으로 이동할 수 있다. 하지만, 바구니는 스크린의 경계를 넘어가면 안 된다. 가장 처음에 바구니는 왼쪽 M칸을 차지하고 있다.

// 스크린의 위에서 사과 여러 개가 떨어진다. 각 사과는 N칸중 한 칸의 상단에서 떨어지기 시작하며, 스크린의 바닥에 닿을때까지 직선으로 떨어진다. 한 사과가 바닥에 닿는 즉시, 다른 사과가 떨어지기 시작한다.

// 바구니가 사과가 떨어지는 칸을 차지하고 있다면, 바구니는 그 사과가 바닥에 닿을 때, 사과를 담을 수 있다. 상근이는 사과를 모두 담으려고 한다. 이때, 바구니의 이동 거리의 최솟값을 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2828

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map((a) => Number(a));
const apple_num = Number(input[1]); // 사과의 갯수
const apples = input.slice(2, input.length).map((a) => Number(a));

let answer = 0;
let start = 1; // 바구니의 첫 부분
let end = M; // 바구니의 마지막 부분

for (let apple of apples) {
  if (end < apple) {
    answer += apple - end;
    end = apple;
    start = apple - (M - 1);
  } else if (start > apple) {
    answer += start - apple;
    start = apple;
    end = apple + (M - 1);
  }
}

console.log(answer);

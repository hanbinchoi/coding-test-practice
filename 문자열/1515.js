// [문제 이름]
// : 수 이어 쓰기

// [문제 설명]
// : 세준이는 1부터 N까지 모든 수를 차례대로 공백없이 한 줄에 다 썼다. 그리고 나서, 세준이가 저녁을 먹으러 나간 사이에 다솜이는 세준이가 쓴 수에서 마음에 드는 몇 개의 숫자를 지웠다.

// 세준이는 저녁을 먹으러 갔다 와서, 자기가 쓴 수의 일부가 지워져있는 모습을 보고 충격받았다.

// 세준이는 수를 방금 전과 똑같이 쓰려고 한다. 하지만, N이 기억이 나지 않는다.

// 남은 수를 이어 붙인 수가 주어질 때, N의 최솟값을 구하는 프로그램을 작성하시오. 아무것도 지우지 않을 수도 있다.)

// [문제 링크]
// : https://www.acmicpc.net/problem/1515

const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split("\n");

const numbers = input[0].split("").map((e) => +e);

let prev = -1;
let count = 1;
for (i of numbers) {
  console.log(i);
  if (prev < i) prev = i;
  else {
    const k = [count * 10 + i, i * 10 + count, (count + 1) * 10 + i];
    k.sort((a, b) => a - b);
    if (k[0] > prev) prev = k[0];
    else if (k[1] > prev) prev = k[1];
    else {
      count++;
      prev = count * 10 + i;
    }
  }
  console.log(prev);
}
console.log(prev);

// [문제 이름]
// : 랜선 자르기

// // [문제 설명]
// 집에서 시간을 보내던 오영식은 박성원의 부름을 받고 급히 달려왔다. 박성원이 캠프 때 쓸 N개의 랜선을 만들어야 하는데 너무 바빠서 영식이에게 도움을 청했다.

// 이미 오영식은 자체적으로 K개의 랜선을 가지고 있다. 그러나 K개의 랜선은 길이가 제각각이다. 박성원은 랜선을 모두 N개의 같은 길이의 랜선으로 만들고 싶었기 때문에 K개의 랜선을 잘라서 만들어야 한다. 예를 들어 300cm 짜리 랜선에서 140cm 짜리 랜선을 두 개 잘라내면 20cm는 버려야 한다. (이미 자른 랜선은 붙일 수 없다.)

// 편의를 위해 랜선을 자르거나 만들 때 손실되는 길이는 없다고 가정하며, 기존의 K개의 랜선으로 N개의 랜선을 만들 수 없는 경우는 없다고 가정하자. 그리고 자를 때는 항상 센티미터 단위로 정수길이만큼 자른다고 가정하자. N개보다 많이 만드는 것도 N개를 만드는 것에 포함된다. 이때 만들 수 있는 최대 랜선의 길이를 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1654

// 백준 문제풀이용 코드
let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let lans = [];

for (let i = 0; i < n; i++) {
  lans.push(Number(input[i + 1]));
}

let start = 1;
let end = Math.max(...lans);
let mid;
const findLength = (start, end) => {
  while (start < end) {
    mid = parseInt((start + end) / 2);
    let sum = 0;
    for (i of lans) {
      sum += parseInt(i / mid);
    }
    if (sum < k) {
      end = mid;
    } else if (sum === k) {
      while (sum === k) {
        mid++;
        sum = 0;
        for (i of lans) {
          sum += parseInt(i / mid);
        }
      }
      break;
    } else {
      start = mid;
    }
  }
  return mid - 1;
};

console.log(findLength(start, end));

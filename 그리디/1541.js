// 백준 테스트용 코드
let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString();

// 사용되는 연산은 -, + 밖에 없다 -> -로 먼저 나누고 나눠진 원소를 다시 +로 나눠서 처리하자 (최대한 -하는 값이 커지도록 -와 -사이를 괄호로 묶음)
// 마이너스를 기준으로 배열을 나눈 후 나눠진 배열은 +를 기준으로 또 나눔 "1+2-3+4" => [1+2, 3+4] => [[1,2], [3,4]]
const minusArr = input.split("-").map((ele) => ele.split("+"));
// 첫번째 원소는 원소의 합을 무조건 +로 더해줌 [1,2] => 3
let answer = minusArr[0].reduce((acc, cur) => Number(acc) + Number(cur));
// 사용된 첫번째 원소 제거
minusArr.shift();

// 나머지 원소를 순환하고 각 원소의 합을 정답에서 빼줌
for (i of minusArr) {
  // [3,4] => 7  ==> 3-7
  answer -= i.reduce((acc, cur) => Number(acc) + Number(cur));
}
console.log(answer);

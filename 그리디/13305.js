let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

// 도시의 개수
let n = Number(input[0]);
// 인접한 두 도시를 연결하는 도로의 길이
let distance = input[1].split(" ").map(BigInt);
// 도시별 주유소의 리터당 가격
let price = input[2].split(" ").map(BigInt);
// 총 비용 -> 초기값으로 첫 도시에서 무조건 지불해야할 기름비 할당
let totalPrice = price[0] * distance[0];

// 최소 주유 비용
let minPrice = price[0];

// 현재 주유비가 다음 도시의 주유비 보다 싸면 현재도시에서 처리
for (let i = 1; i < price.length - 1; i++) {
  if (minPrice > price[i]) {
    minPrice = price[i];
  }
  totalPrice += minPrice * distance[i];
}

console.log(String(totalPrice));

/*
58점 나오길래 구글링해서 찾아보니 Number 대신 BigInt를 써야 풀리는 문제였다...
엄청 큰 정수를 쓸때 사용하는 내장 객체라고 한다.
더 알고싶지 않다...
*/

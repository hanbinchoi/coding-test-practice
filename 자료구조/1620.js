// [문제 이름]
// : 나는야 포켓몬 마스터 이다솜

// [문제 설명]
// :

// [문제 링크]
// : https://www.acmicpc.net/problem/1620

const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split("\n");

const [n, m] = input[0].split(" ").map((ele) => +ele);

const pokemons = new Map();
const pokemons2 = new Map();

for (let i = 1; i <= n; i++) {
  pokemons.set(input[i], i);
  pokemons2.set(i, input[i]);
}
for (let i = n + 1; i <= n + m; i++) {
  if (isNaN(input[i])) {
    console.log(pokemons.get(input[i]));
  } else {
    console.log(pokemons2.get(+input[i]));
  }
}

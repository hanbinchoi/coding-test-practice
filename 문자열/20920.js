// [문제 이름]
// : 영단어 암기는 괴로워

// [문제 설명]
// : 화은이는 이번 영어 시험에서 틀린 문제를 바탕으로 영어 단어 암기를 하려고 한다. 그 과정에서 효율적으로 영어 단어를 외우기 위해 영어 단어장을 만들려 하고 있다. 화은이가 만들고자 하는 단어장의 단어 순서는 다음과 같은 우선순위를 차례로 적용하여 만들어진다.

// 1. 자주 나오는 단어일수록 앞에 배치한다.
// 2. 해당 단어의 길이가 길수록 앞에 배치한다.
// 3. 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다
//
// M보다 짧은 길이의 단어의 경우 읽는 것만으로도 외울 수 있기 때문에 길이가
// M이상인 단어들만 외운다고 한다. 화은이가 괴로운 영단어 암기를 효율적으로 할 수 있도록 단어장을 만들어 주자.

// [문제 링크]
// : https://www.acmicpc.net/problem/20920

const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split("\n");
let [N, M] = [input[0].split(" ")[0], input[0].split(" ")[1]];
input.shift();

let arr = input
  .filter((el) => {
    if (el.length >= parseInt(M)) return el;
  })
  .sort()
  .sort((a, b) => b.length - a.length);

let map = new Map();
for (let x of arr) {
  if (map.has(x)) map.set(x, map.get(x) + 1);
  else map.set(x, 1);
}

let sortArr = [...map].sort((a, b) => b[1] - a[1]);

let sortTmp = [];
for (let x of sortArr) {
  sortTmp.push(x[0]);
}

console.log(sortTmp.join("\n"));

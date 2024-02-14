// [문제 이름]
// : 단어의 개수

// [문제 설명]
// : 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1152

// 백준 문제풀이용 코드
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const k = input[0].trim().split(" ");

k == "" ? console.log(0) : console.log(k.length);

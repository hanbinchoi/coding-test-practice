// [문제 이름]
// : 팰린드롬인지 확인하기

// [문제 설명]
// : 알파벳 소문자로만 이루어진 단어가 주어진다. 이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오.

// 팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다.

// level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.

// [문제 링크]
// : https://www.acmicpc.net/problem/10988

const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split("\n");

const s = input[0];

let [start, end] = [0, s.length - 1];

let isPalindrome = true;

while (start <= end) {
  if (s[start] !== s[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}
console.log(isPalindrome ? 1 : 0);

let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

// 유사회문인지 판단하는 함수
const isPseudoPalindrome = (string) => {
  // 가장 앞에 글자와 가장 뒤에서 두번째 글자가 일치하면 유사회문
  if (string[0] === string[string.length - 2])
    // 가장 뒤 글자 제외하고 리턴
    return string.slice(0, string.length - 1);
  // 가장 마지막 글자와 앞에서 두번째 글자가 일치하면 유사회문
  if (string[string.length - 1] === string[1])
    // 가장 앞 글자 제외하고 리턴
    return string.slice(1, string.length);
  // 둘다 아니면 유사회문이 아니다
  else return false;
};

// 회문인지 판단하는 함수
const isPalindrome = (string) => {
  for (let j = 0; j < parseInt(string.length / 2); j++) {
    // 회문이 아닐 경우 회문이 아닌 부분 리턴
    // aacdbb -> c부터 회문이 아님 -> c의 인덱스 2를 리턴
    if (string[j] !== string[string.length - j - 1]) {
      return j;
    }
  }
  // 회문이면 -1 리턴
  return -1;
};

const n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  const test = input[i];
  // 1. 회문인지 판단
  const stopPoint = isPalindrome(test);
  // 2. 회문이면 0 출력
  if (stopPoint === -1) console.log(0);
  // 3. 회문이 아닐 경우
  else {
    // 4. 회문이 아닌 인덱스를 기준으로 잘라서 유사회문인지 판단
    const subString = isPseudoPalindrome(
      test.slice(stopPoint, test.length - stopPoint)
    );
    // 유사회문이 아니면 2 출력
    if (subString === false) {
      console.log(2);
    }
    // 유사회문이면 뽑아온 subString이 회문인지 판단
    else {
      // subString이 회문이면 유사회문이다 -> 1 출력
      if (isPalindrome(subString) === -1) console.log(1);
      // 아니면 2 출력
      else console.log(2);
    }
  }
}

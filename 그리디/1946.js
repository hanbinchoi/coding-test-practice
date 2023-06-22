let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split("\n");

// 백준 테스트케이스 적용을 위한 로직
let t = Number(input[0]);
const test = [];
let start = 2;
let end = 2 + Number(input[1]);
for (let i = 0; i < t; i++) {
  test.push(input.slice(start, end));
  start += test[test.length - 1].length + 1;
  end = start + Number(input[start - 1]);
}
// 로직을 수행한 뒤 test 원소에 각 테스트별 신입사원의 순위가 ["a서류 a면접","b서류 b면접"] 이런식으로 들어감
for (t of test) {
  // 통과할 수 있는 면접 성적을 담을 변수
  let rHigh;
  // 서류 성적이 1등인 사람은 무조건 통과니까 answer을 1로 셋팅
  let answer = 1;
  // test 원소를 ["a서류 a면접","b서류 b면접"] => [[a서류,a면접],[b서류,b면접]] 형태로 변환
  let rank = t.map((ele) => ele.split(" ").map(Number));
  // 서류 성적을 기준으로 sorting
  rank.sort((a, b) => a[0] - b[0]);

  rank.forEach((element, index) => {
    // 1. 서류 성적을 기준으로 sorting 했으므로 서류 성적은 고려할 필요 없다.
    // 2. 두번째 오는 사람이 합격하려면 첫번째 사람보다 서류 성적이 낮으므로 두번째 사람의 면접 성적이 첫번째 사람의 면접 성적보다 높아야 한다.
    // 3. 그 이후 사람은 가장 마지막에 합격한 사람보다 서류 성적이 낮으므로 면접 성적이 높아야한다.
    // -> 면접 성적을 합격하면 통과할 수 있는 면접 성적을 그사람의 면접 점수로 최신화하는 방식으로 진행.

    // 첫번째 사람일 경우 첫번째 사람의 면접 순위를 바로 할당
    if (index === 0) {
      rHigh = element[1];
    }
    // 그 이후에 오는 사람들의 면접 순위가 낮으면 그 사람의 면접순위를 rHigh값에 재할당 시켜준다.
    else {
      if (rHigh > element[1]) {
        answer++;
        rHigh = element[1];
      }
    }
  });
  console.log(answer);
}

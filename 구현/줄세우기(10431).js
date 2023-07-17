// [문제 이름]
// : 줄세우기

// [문제 설명]
// 초등학교 선생님 강산이는 아이들을 데리고 단체로 어떤 일을 할 때 불편함이 없도록 새로 반에 배정받은 아이들에게 키 순서대로 번호를 부여한다. 번호를 부여할 땐 키가 가장 작은 아이가 1번, 그 다음이 2번, ... , 가장 큰 아이가 20번이 된다. 강산이네 반 아이들은 항상 20명이며, 다행히도 같은 키를 가진 학생은 한 명도 없어서 시간이 조금 지나면 아이들은 자기들의 번호를 인지하고 한 줄로 세우면 제대로 된 위치에 잘 서게 된다.

// 하지만 매년 첫 며칠간 강산이와 강산이네 반 아이들은 자기가 키 순으로 몇 번째인지 잘 알지 못해 아주 혼란스럽다. 자기 위치를 찾지 못하는 아이들을 위해 강산이는 특별한 방법을 생각해냈다.

// 우선 아무나 한 명을 뽑아 줄의 맨 앞에 세운다. 그리고 그 다음부터는 학생이 한 명씩 줄의 맨 뒤에 서면서 다음 과정을 거친다.

// 자기 앞에 자기보다 키가 큰 학생이 없다면 그냥 그 자리에 서고 차례가 끝난다.
// 자기 앞에 자기보다 키가 큰 학생이 한 명 이상 있다면 그중 가장 앞에 있는 학생(A)의 바로 앞에 선다. 이때, A부터 그 뒤의 모든 학생들은 공간을 만들기 위해 한 발씩 뒤로 물러서게 된다.
// 이 과정을 반복하면 결국 오름차순으로 줄을 설 수가 있다.

// 아이들의 키가 주어지고, 어떤 순서로 아이들이 줄서기를 할 지 주어진다. 위의 방법을 마지막 학생까지 시행하여 줄서기가 끝났을 때 학생들이 총 몇 번 뒤로 물러서게 될까?

// [문제 링크]
// : https://www.acmicpc.net/problem/10431

// 백준 문제풀이용 코드
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let p = +input[0];

for (let i = 1; i <= p; i++) {
  const test = input[i].split(" ");
  const [t, heights] = [+test[0], test.slice(1).map(Number)];
  let count = 0;
  const queue = [];
  for (height of heights) {
    // 처음오는 아이는 맨 앞에 배치
    if (queue.length === 0) queue.push(height);
    else {
      // 줄서있는 아이보다 키가 큰 아이가 있는지 인덱스를 찾는다.
      const idx = queue.findIndex((ele) => ele > height);
      if (idx >= 0) {
        // 있으면 현재 서있는 아이들 수 - 들어갈 자리 해주면 뒤로 움직이는 걸음 수가 계산된다.
        count += queue.length - idx;
        // 그리고 index에 배치
        queue.splice(idx, 0, height);
      }
      // 없을 경우 맨 뒤에 배치
      else {
        queue.push(height);
      }
    }
  }
  console.log(t + "", count + "");
}

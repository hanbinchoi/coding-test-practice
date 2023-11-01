function solution(relation) {
  var answer = 0;
  let skip = [];
  let rest = [];
  for (let i = 0; i < relation[0].length; i++) {
    let tempArr = [];
    for (let j = 0; j < relation.length; j++) {
      tempArr.push(relation[j][i]);
    }
    if (tempArr.length === new Set(tempArr).size) {
      answer++;
      skip.push(i);
    } else {
      rest.push(i);
    }
  }
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1);
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]);
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };
  let combination = [];
  for (let i = 2; i <= rest.length; i++) {
    combination.push(...getCombinations(rest, i));
  }
  while (combination.length !== 0) {
    let line = combination.shift();
    let key = [];
    for (let i = 0; i < relation.length; i++) {
      let str = "";
      for (j of line) {
        str += relation[i][j];
      }
      key.push(str);
    }
    if (key.length === new Set(key).size) {
      answer++;
      combination = combination.filter(
        (ele) => ele.join().indexOf(line.join()) < 0
      );
    }
  }

  return answer;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);

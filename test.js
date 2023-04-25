function solution(common) {
  var answer = 0;
  let d = false;
  if (common[2] - common[1] === common[1] - common[0]) d = true;
  else d = false;

  if (d) {
    return common[common.length - 1] + (common[2] - common[1]);
  } else {
    return common[common.length - 1] * (common[2] / common[1]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4]));

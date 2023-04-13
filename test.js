function solution(sides) {
  var answer = 0;
  const max_index = sides.indexOf(Math.max(...sides));
  for (let i = 0; i < sides.length; i++) {
    if (i === max_index) {
      continue;
    } else {
      answer += sides[i];
    }
  }
  console.log(answer, sides[max_index]);
  if (answer <= sides[max_index]) {
    return 2;
  } else {
    return 1;
  }
}
console.log(solution([1, 2, 3]));

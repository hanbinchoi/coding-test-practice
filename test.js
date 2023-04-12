function solution(n) {
  var answer = [];
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }
  console.log(answer);
  let k = [];
  answer.forEach((element) => {
    let i = 2;
    while (i != element + 1) {
      if (element % i == 0) {
        if (element === i) {
          k.push(i);
        } else {
          break;
        }
      }
      i++;
    }
  });
  return k;
}
console.log(solution(8));

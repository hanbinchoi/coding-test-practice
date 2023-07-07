function paveBox(boxes) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = 1;
  let time = 1;
  let prev = boxes.shift();
  while (boxes.length !== 0) {
    let next = boxes.shift();
    if (prev >= next) {
      time++;
      if (answer < time) {
        answer = time;
      }
    } else {
      prev = next;
      answer = time;
      time = 1;
    }
  }
  return answer;
}

console.log(paveBox([5, 1, 4, 6]));
console.log(paveBox([1, 5, 7, 9]));
console.log(paveBox([80, 30, 40, 55, 66, 21, 8, 25, 44, 77, 92]));
console.log(paveBox([95, 90, 99, 99, 80, 99]));

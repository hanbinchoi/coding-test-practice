const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  let start = 0;
  let end = rotated.length - 1;
  let point;
  while (true) {
    if (rotated[start] > rotated[start + 1]) {
      point = start;
      break;
    }
    if (rotated[end] < rotated[end - 1]) {
      point = end;
      break;
    }
    start++;
    end--;
  }
  point++;
  let sortedArr = [...rotated.slice(point), ...rotated.slice(0, point)];
  console.log(sortedArr);
  start = 0;
  end = sortedArr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (sortedArr[mid] === target) {
      return mid + point;
    }
    if (sortedArr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    console.log(start, end);
  }
  return -1;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100));

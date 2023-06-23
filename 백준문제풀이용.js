// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid; // 최대한 왼쪽으로 이동
    } else start = mid + 1;
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid > target]) end = mid;
    else start = mid + 1; // 최대한 오른쪽으로 이동
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  console.log(rightIndex, leftIndex);
  return rightIndex - leftIndex;
}
console.log(countByRange([1, 1, 1], 1, 1));

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과배열의 인덱스
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  } else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
let arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
// 임시 정렬 배열 정의
sorted = Array.from({ length: arr.length }, () => 0);

mergeSort(arr, 0, arr.length - 1);

console.log(arr);

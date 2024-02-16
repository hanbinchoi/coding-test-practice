const arr = [2, 4, 3, 1, 9, 6, 8, 7, 5, 1];

const sortedArr = [];

for (let i = 0; i < arr.length; i++) {
  const min = Math.min(...arr.slice(i));
  const idx = arr.slice(i).indexOf(min);
  arr[idx + i] = arr[i];
  arr[i] = min;
}
console.log(arr);

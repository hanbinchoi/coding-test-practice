// [문제 이름]
// : 부분집합 구하기

// [문제 설명]
// :

// [문제 링크]
// :

function getSubset(nums) {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    res.push(arr);
    //if (arr.length === nums) return; 해도되고 안써도 된다. 속도는 조금더 좋을듯

    for (let i = start; i < nums; i++) {
      dfs(i + 1, [...arr, i + 1]);
    }
  };
  dfs();

  return res;
}

console.log(getSubset(3));

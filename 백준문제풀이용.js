let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  let dp = [0, 1, 2];
  const d = (n) => {
    if (dp[n] !== undefined) return dp[n];
    dp[n] = d(n - 2) + d(n - 1);
    return dp[n];
  };
  return d(n);
};

console.log(tiling(3));

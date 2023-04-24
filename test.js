function solution(bin1, bin2) {
  var answer = "";
  let sum = parseInt(bin1) + parseInt(bin2);
  sum = "" + sum;
  console.log(sum);
  let k = 0;
  for (let i = sum.length - 1; i >= 0; i--) {
    let index = parseInt(k) + parseInt(sum[i]);
    console.log(index);
    if (index === 0 || index === 1) {
      answer += index;
      k = "0";
    } else {
      answer += index % 2;
      k = "1";
    }
    console.log("ar=" + answer);
  }
  if (k === "1") {
    answer += "1";
  }
  return answer.split("").reverse().join("");
}
console.log(solution("100001", "1010101"));

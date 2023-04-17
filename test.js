function solution(my_string) {
  var answer = "";
  answer = my_string.toLowerCase();
  answer = [...answer];
  answer.sort();
  return answer.join("");
}
console.log(solution("BcaAAA"));

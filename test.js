function solution(id_pw, db) {
  var answer = "";
  for (i of db) {
    if (i[0] === id_pw[0]) {
      if (i[1] === id_pw[1]) {
        return "login";
      } else {
        return "wrong pw";
      }
    }
  }
  return "fail";
}
console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);

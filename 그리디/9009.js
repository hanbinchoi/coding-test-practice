let fs = require("fs");
let input = fs.readFileSync("./ex.txt").toString().split(" ");

let n = Number(input[0]);
console.log(fibonacci(100));
function fibonacci(num) {
  const fib = [0, 1];
  const d = (num) => {
    if (num === 0) return [0];
    if (num === 1) return [0, 1];
    if (fib[num] !== undefined) return fib;

    const [l, r] = [d(num - 1), d(num - 2)];
    fib[num] = l[l.length - 1] + r[r.length - 1];
    return fib;
  };
  return d(num);
}

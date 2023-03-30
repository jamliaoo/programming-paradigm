let input = [3, 4, 5, 6, 7];
let max = input[0];

for (item of input) {
  if (item > max) {
    max = item;
  }
}

console.log(max);

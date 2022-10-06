function increment(counter) {
  return counter + 1;
}

const plus2 = compose(
  increment,
  increment,
);

console.log(plus2(0)); // 2

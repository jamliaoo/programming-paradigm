const products = [
  { name: "apple", quantity: 0 },
  { name: "orange", quantity: 2 },
];

const newProducts = products.map((product, index) => {
  if (index === 0) {
    product.quantity = 5;
  }
  return product;
});

console.log(products);
// [{ name: "apple", quantity: 5 }, ...]
console.log(newProducts);
// [{ name: "apple", quantity: 5 }, ...]

async function getProducts() {
  let products = await fetch();

  // apply discount
  products.forEach((p) => {
    p.price = p.price * discount;
  });

  // calculate total
  let total = 0;
  products.forEach((p) => {
    total = total + p.price;
  });

  return products;
}

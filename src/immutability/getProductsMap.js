async function getProducts() {
  const products = await fetch();

  // apply discount
  const productsWithDiscount = products.map((p) => {
    return {
      ...p,
      price: p.price * discount,
    };
  });

  // calculate total
  let total = 0;
  products.forEach((p) => {
    total = total + p.price;
  });

  // calculate total with discount
  let totalWithDiscount = 0;
  productsWithDiscount.forEach((p) => {
    totalWithDiscount = totalWithDiscount + p.price;
  });

  return products;
}

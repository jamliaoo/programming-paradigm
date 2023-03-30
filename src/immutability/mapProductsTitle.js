function getProducts() {
  let products;
  fetch("url")
    .then((response) => response.json())
    .then((result) => {
      products = result.data;
      products.forEach((product) => {
        product.title.upperCase();
      });
    })
    .catch((err) => {
      console.log(err);
      products = [];
    });
  return products;
}

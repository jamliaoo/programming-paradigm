let data;

function fetchProducts() {
  data = fetch(PRODUCTS_API);
}

function renderProductsCard() {
  render(data);
}

function fetchOrders() {
  data = fetch(ORDERS_API);
}

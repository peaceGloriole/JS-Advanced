function sumTable() {
  let product = document.querySelectorAll(`table tr`);
  let total = 0;
  for (let i = 1; i < product.length; i++) {
    let cols = product[i].children;
    let cost = cols[cols.length - 1].textContent;
    total += Number(cost);
  }
  document.getElementById(`sum`).textContent = total;
}
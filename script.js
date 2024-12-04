function descendingOrder(n) {
  return +(n + "").split("").sort().reverse().join("");
}
console.log(descendingOrder(1021));

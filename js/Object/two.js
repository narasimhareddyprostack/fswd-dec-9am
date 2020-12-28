let product = {
  name: "iphone 5s",
  price: 3000,
  color: "grey",
  status: function () {
    console.log("Delivered");
    return "";
  },
};

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.color);
console.log(product.status());

console.log(product.ram); // accessing obj property which is not existed.
console.log(product.canceled()); //accessing obj method which is no existed

// let product_Emp_Obj = {};
// console.log(product_Emp_Obj);
/*
let product_Props = {
  name: "iphone 5s",
  price: 3000,
  color: "grey",
};

console.log(product_Props);
console.log(product_Props["name"]);
console.log(product_Props.name);
// */

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

function add(x, y) {
  console.log("...inside fun");
  return x + y;
}
function add(x, y, z) {
  console.log("...inside fun - three arg");
  return 100;
  console.log("After Return Statement");
}
let x = add();
console.log(x);

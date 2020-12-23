const x = 200;
function add() {
  var x = 10;
  console.log(x);
}

add();
function one() {
  console.log(x);
}
one();

function tree() {
  x = 1;
  console.log(x);
}
tree();
console.log(x);

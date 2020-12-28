var x = 10;
var xarray = [2, 4, 6, 7, 8];

// for (let i = 0; i < xarray.length - 1; i++) {
//   if (xarray[i] % 3 == 0) {
//     console.log(xarray[i], "Divide by 3");
//   } else console.log(xarray[i],"Not Divide by 3");
// }

for (value in xarray) {
  console.log(xarray[value]);
  if (xarray[value] % 3 == 0) {
    console.log("True");
  }
}

//Immediately Invoked Function Expressions (IIFE)

// (function chai() {
//   console.log("DB Connected");
// })();

// (() => {
//   console.log("Db Connected two");
// })();

// ((name) => {
//   console.log(`Db Connected two :${name}`);
// })("Chitrangi");

/*
for (let i = 0; i < 10; i++) {
  console.log(` No ${i}: This is Chrome Developers Tools`);
}
console.log(`-----------------------------------------------`);
for (let i = 1; i <= 10; i++) {
  console.log(`No ${i} : This is Chrome Developers Tools`);
}

*/

for (let i = 1; i < 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

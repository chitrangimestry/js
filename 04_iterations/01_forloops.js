

for (let i = 1; i < 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
  }
  
  for (let i = 0; i <= 20; i++) {
    if (i == 5) {
      console.log(`Detected 5`);
      continue;
    }
    console.log(`Value of i is ${i}`);
  }
  
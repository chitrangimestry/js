/*
arithmetic
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 11);
console.log(2 <= 12);
console.log(2 == 1);
console.log(2 === 1);
console.log(2 != 1);
console.log(2 !== 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log("------");
console.log(undefined >= 0);
console.log(undefined >= 0);
console.log(undefined >= 0);

//Stack(Primitive), Heap(Non-Primitive)
let youtubeName = "hitesh";
let anotherName = "maximillian";
anotherName = "jonas";
console.log(youtubeName);
console.log(anotherName);

*/
let user = {
  email: "abc@gmail.com",
  upi: "abcdef@ybl",
};
console.log(user);

let userTwo = { ...user };
userTwo.upi = "userTwo@ybls"
console.log(userTwo);

let userThree = user;
userThree.upi = "bvfj@ybl"
console.log(userThree);

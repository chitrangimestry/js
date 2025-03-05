// let myArr = ["Flash", "Batman", "Superman", "Ironman", "Wolverine"];

// for (const hero of myArr) {
//   console.log(`The hero name is : ${hero}`);
// }

// const greetings = "Hello World!!";

// for (const letter of greetings) {
//   console.log(`letter in greetings are: ${letter}`);
// }

/*
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("IR", "Republic of Ireland");
map.set("KR", "Republic of South Korea");
map.set("FR", "Republic of France");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, " : " ,value);
}


console.log('-------------------------------------------')


const myObj = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  php: "Hypertext Pre Processor",
  swift: "Swift by Apple",
  ts: "TypeScript",
};

for (const key in myObj) {
  console.log(`${key} is shortcut for ${myObj[key]}`);
}


let myArr = ["Flash", "Batman", "Superman", "Ironman", "Wolverine"];
for (const key in myArr) {
  console.log(myArr[key]);
}
*/

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("IRL", "Republic of Ireland");
map.set("KR", "Republic of South Korea");
map.set("FR", "Republic of France");

for (const key in map) {
  //   console.log(map[key]);
}

const greetings = "Hello World!!";
for (const key in greetings) {
  //console.log(greetings[key]);
}

let myArr = ["Flash", "Batman", "Superman", "Ironman", "Wolverine"];
// myArr.forEach((val) => {
//   console.log(val);
// });

function print(val) {
  console.log(val);
}
myArr.forEach(print);

/*
Arrays

const myArr = ["chitrangi", 45, 1, 0, 5, 14, 77, true, 2];
console.log(myArr[5]);

const myHeros = [
    "Iron Man",
    "Hulk",
    "Spider Man",
    "Captain America",
];


//Array Methods
myHeros.push("Wolverine")
console.log(myHeros)
myHeros.pop()
console.log(myHeros)
myHeros.unshift("Wonder Woman")
console.log(myHeros)
console.log(myHeros.includes("Spider Man"))
*/

/*
 Array Part 2
 */

const myHeros = ["Iron Man", "Hulk", "Spider Man", "Captain America"];

const otherHeros = ["Thor", "Wanda", "Vision", "Flash"];

const allHeros = myHeros.concat(otherHeros);
console.log(allHeros);

const allNewHeros = [...myHeros, ...allHeros]
console.log(allNewHeros);

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
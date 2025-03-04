function loginUserMessage(username) {
  return `${username} just logged in.`;
}
const res = loginUserMessage("chitra");

// console.log(res);

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(20, 455, 14522, 114));

const user = {
  username: "Max",
  price: 199,
  location: "Malvan",
};

// function handleObject(anyObj) {
//   console.log(
//     `Username is ${anyObj.username} and price is ${anyObj.price} and its location is ${anyObj.location}`
//   );
// }
// const result = handleObject(user);
// console.log(result);

/* -------------Scoping-------------- */
//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "chitrangi";

  function two() {
    const website = "youtube";
    console.log(username);
  }
//   console.log(website);
  two();
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


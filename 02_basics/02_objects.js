/*
singleton
object literals
Object.create()
*/

const jsUser = {
  name: "Max",
  age: 20,
  location: "Malvan",
  email: "max@tester.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};

// console.log(jsUser.isLoggedIn);
// console.log(jsUser.age);
// console.log(jsUser.name);
// console.log(jsUser.location);

//Singleton
const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh Choudhary",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor);


// {
//     name: "Maximillian",
//     course: "js in hindi",
//     price: "free"
// }
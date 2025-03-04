const user = {
  username: "Chitrangi",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.username}, Welcome to website`);
  },
};

function chai() {
  console.log(this);
}

console.log(chai());

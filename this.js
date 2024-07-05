// const undThis = {
//   name: "zaid",
//   age: "20",

//   greetings: function () {
//     console.log(`Hey this is me ${this.name}`);

//     // console.log(this);
//   },
// };

// undThis.greetings();
// console.log(this);

// undThis.name = "ali";
// undThis.greetings();

// const functionn = () => {
//   let username = "zaid";
//   console.log(this);
// };

// functionn();

function chai() {
  console.log(this);
}

chai();

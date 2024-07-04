"use strict";

// Creating an object
const Zaid = {
  firstName: "Muhammad Zaid",
  lastName: "Khan",
  age: 21,
  hobbies: function () {
    return `Hello, I'm ${this.firstName} ${this.lastName} and my hobbies are solo walking in nature and watching cricket!`;
  },
};

console.log(Zaid.hobbies(), Zaid.age);

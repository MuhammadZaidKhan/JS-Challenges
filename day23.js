// Create an object:
const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "english",
  get lang() {
    return this.language.toUpperCase();
  },
};

// Display data from the object using a getter:
console.log(person1.lang);

//setter
const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang2(lang2) {
    this.language = lang2.toUpperCase();
  },
};

// Set an object property using a setter:
person2.lang = "ur";

// Display data from the object:
console.log(person2.language);

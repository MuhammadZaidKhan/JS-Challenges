let A = {
  sname: "A",
  age: 20,
  occupation: "student",
};
let B = {
  sname: "B",
  age: 17,
  occupation: "student",
};
let C = {
  sname: "C",
  age: 15,
  occupation: "student",
};
let D = {
  sname: "D",
  age: 11,
  occupation: "student",
};
let E = {
  sname: "E",
  age: 21,
  occupation: "student",
};

let family = [A, B, C, D, E];

family.forEach((rorkhor) => {
  console.log(
    `Name: ${rorkhor.sname}, Age: ${rorkhor.age}, Occupation: ${rorkhor.occupation}`
  );
});

function processData(stringArray) {
  const variable1 = 0;
  let variable2 = "abc";

  let finalString = [];

  for (let i = 0; i < stringArray.length; i++) {
    let currentString = stringArray[i];

    if (currentString.includes("a")) {
      currentString = currentString.replace(/a/g, "@");
    } else {
      currentString = currentString.toUpperCase();
    }

    if (currentString.length > 5) {
      currentString = currentString.slice(0, 5);
    }

    console.log(`Processed string: ${currentString}`);
    finalString.push(currentString);

    for (let index in currentString) {
      console.log(`indexes: ${index}, characters: ${currentString[index]}`);
      //   console.log(``);
    }

    for (let char of currentString) {
      console.log(`single character: ${char}`);
    }
  }
  return finalString;
}

const stringArray = ["apple", "banana", "cherry", "date", "fig"];
const result = processData(stringArray);
console.log("Final Array Output:", result);

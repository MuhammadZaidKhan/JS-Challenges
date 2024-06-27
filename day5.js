let eng;
let math;
let physics;

do {
  eng = Number(prompt("Your English Mark (out of 100)?"));
  if (isNaN(eng) || eng < 0 || eng > 100) {
    alert("Please enter a valid English mark between 0 and 100.");
  }
} while (isNaN(eng) || eng < 0 || eng > 100);

do {
  math = Number(prompt("Your Math Marks (out of 100)?"));
  if (isNaN(math) || math < 0 || math > 100) {
    alert("Please enter a valid Math mark between 0 and 100.");
  }
} while (isNaN(math) || math < 0 || math > 100);

do {
  physics = Number(prompt("Your Physics Marks (out of 100)?"));
  if (isNaN(physics) || physics < 0 || physics > 100) {
    alert("Please enter a valid Physics mark between 0 and 100.");
  }
} while (isNaN(physics) || physics < 0 || physics > 100);

let totalMarks = eng + math + physics;
let percentage = (totalMarks / 300) * 100;

percentage = Math.floor(percentage);

switch (true) {
  case percentage >= 80:
    alert(`Total Marks: ${totalMarks} & Percentage: ${percentage} & Grade: A`);
    break;
  case percentage >= 70:
    alert(`Total Marks: ${totalMarks} & Percentage: ${percentage} & Grade: B`);
    break;
  case percentage >= 60:
    alert(`Total Marks: ${totalMarks} & Percentage: ${percentage} & Grade: C`);
    break;
  case percentage < 60:
    alert(`Total Marks: ${totalMarks} & Percentage: ${percentage} & Grade: F`);
    break;
  default:
    alert(
      `Total Marks: ${totalMarks} & Percentage: ${percentage} & Grade: N/A`
    );
}

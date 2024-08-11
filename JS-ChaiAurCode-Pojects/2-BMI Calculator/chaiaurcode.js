const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || isNaN(height) || height < 0) {
    results.innerHTML = `please give a valid hight ${height}`;
  } else if (weight === "" || weight == isNaN(weight) || weight < 0) {
    results.innerHTML = `please give a valid hight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span><br>`;

    const bmi2 = bmi;

    if (bmi2 < 18.6) {
      results.innerHTML += "the value is Under Weight";
    }
    if (bmi2 > 18.6 && bmi2 < 24.9) {
      results.innerHTML += "the value is Normal Range";
    }
    if (bmi2 > 24.9) {
      results.innerHTML += "\nthe value is Overweight";
    }
  }
});

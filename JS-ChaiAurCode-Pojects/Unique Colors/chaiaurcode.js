const randomcolor = function () {
  const number = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += number[Math.floor(Math.random() * 16)];
  }
  return hash;
};
let interrval;
const startchangingcolor = function () {
  interrval = setInterval(change, 1000);
  function change() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopchangingcolor = function () {
  clearInterval(interrval);
};

document.querySelector("#start").addEventListener("click", startchangingcolor);
document.querySelector("#end").addEventListener("click", stopchangingcolor);

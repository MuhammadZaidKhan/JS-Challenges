const myTimeout = setTimeout(myGreeting, 1);

function myGreeting() {
  hi = "Heyyyyyyyyyyyyyyyyyyyyyy";
  console.log(hi);
  //   return hi;
}
function myStopFunction() {
  clearTimeout(myTimeout);
}

function text() {
  document.body.innerHTML = "Hello World";
}
//text();

let arr = ["Mohab", "Olga", "Guest"];
let div = document.getElementById("div1");
let bM = document.getElementById("M");
let bO = document.getElementById("O");
function helloM(arr) {
  div.innerHTML = arr[0];
}
function helloO(arr) {
  div.innerHTML = arr[1];
}

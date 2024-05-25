const obj = document.querySelector(".C");
obj.innerHTML = "Hello, DOM!";

const obj1 = document.getElementById("B");
obj1.style.backgroundColor = "blue";

function myFunction() {
const txt = document.querySelector(".fname");
const para = document.querySelector(".count");
const text = txt.value;
const length= text.length;
para.innerHTML=`Character count = ${length}`;
}
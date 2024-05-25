//Question no. 1
document.querySelector(".dom").innerHTML = "Hello DOM!";
document.getElementById("game").style.backgroundColor="blue";
//Question no. 2
const innerElement = document.getElementById("textInput");
const innerParagraph = document.getElementById("characterCount");
innerElement.addEventListener('keyup', function() {
  const innerValue = innerElement.value;
  console.log(innerValue);
  const countValue = innerValue.length;
  innerParagraph.textContent=countValue;
})

//Question no. 4
function arrayManipulation(arr, callback1, callback2){
  return arr;
}

let array = [1,2,3,4,5];
const maparray=array.map 


/*//Question no. 1
function printArray(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }
    return arr;
  }
  number = parseInt(prompt("Enter a number: "))
  console.log(printArray(number));*/
//Question no. 2
  function countTrue(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === true) {
        count++;
      }
    }
    return count;
  }
  console.log(countTrue([true, false, false, true, false]));
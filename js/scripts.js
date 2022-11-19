function returnArray(num) {
  let numArray = [];
  for (i = 0; i <= num; i++) {
  numArray.push(i);
  }
  return numArray;
}

function beep(num) {
  let array = returnArray(num);
  let beepArray = array.map(function(element) {
    if (element.toString().includes("1")) {
      return "beep";
    } else {
      return element;
    }
  })
  return beepArray;
}
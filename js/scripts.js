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

function boop(num) {
  let array = returnArray(num);
  let boopArray = array.map(function(element) {
    if (element.toString().includes("1") && !element.toString().includes("2")) {
      return "beep";
    } else if (element.toString().includes("2")) {
      return "boop";
    } else {
      return element;
    }
  })
  return boopArray;
}

function neighbor(num) {
  let array = returnArray(num);
  let neighborArray = array.map(function(element) {
      if (element.toString().includes("1") && !element.toString().includes("2") && !element.toString().includes("3")) {
      return "beep";
    } else if (element.toString().includes("2") && !element.toString().includes("3")) {
      return "boop";
    } else {
      return element;
    }
  })
  return neighborArray;
}
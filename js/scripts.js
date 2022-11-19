//Business Logic

function returnArray(num) {
  let numArray = [];
  for (i = 0; i <= num; i++) {
  numArray.push(i);
  }
  return numArray;
}

function neighbor(num) {
  let array = returnArray(num);
  let neighborArray = array.map(function(element) {
      if (element.toString().includes("1") && !element.toString().includes("2") && !element.toString().includes("3")) {
      return "beep";
    } else if (element.toString().includes("2") && !element.toString().includes("3")) {
      return "boop";
    } else if (element.toString().includes("3")) {
      return "Won't you be my neighbor?";
    } else {
      return element;
    }
  })
  return neighborArray;
}

//User Interface Logic

window.addEventListener("load", function() {
  const form = document.querySelector("form");

  function robotSpeaks(e) {
    let inputNum = parseInt(document.querySelector("input#number").value);
    let outputArray = neighbor(inputNum);
    
    e.preventDefault();
  }

  form.addEventListener("submit", );
})

// function beep(num) {
//   let array = returnArray(num);
//   let beepArray = array.map(function(element) {
//     if (element.toString().includes("1")) {
//       return "beep";
//     } else {
//       return element;
//     }
//   })
//   return beepArray;
// }

// function boop(num) {
//   let array = returnArray(num);
//   let boopArray = array.map(function(element) {
//     if (element.toString().includes("1") && !element.toString().includes("2")) {
//       return "beep";
//     } else if (element.toString().includes("2")) {
//       return "boop";
//     } else {
//       return element;
//     }
//   })
//   return boopArray;
// }
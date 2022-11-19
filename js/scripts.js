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
  let paragraph = document.querySelector("p");
  let paraDiv = document.querySelector("div#output");
  let input = document.querySelector("input#number");

  function robotSpeaks(e) {
    let inputNum = parseInt(input.value);
    paraDiv.classList.add("hidden");

    if (inputNum > 0) {
      let output = neighbor(inputNum).join(" ");
      paragraph.innerText = output;
      paraDiv.classList.remove("hidden");
    }
    
    input.value = "";

    e.preventDefault();
  }

  form.addEventListener("submit", robotSpeaks);
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
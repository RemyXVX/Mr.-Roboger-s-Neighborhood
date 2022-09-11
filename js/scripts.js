// //Ulitility// //
/*let arrNum = beepBoop()
let beepArr = arrNum.split("")
let outStr = ""*/

//const oneNum = "Beep!"
//const twoNum = "Boop!"
//const thrreeNum = "Won't you be my neighbor?"

// //BL// //
function beepBoop(number) {
  let arrayBeepBoop = parseInt(number);
  let arrayResult = [];
  for (let i = 0; i <= arrayBeepBoop; i += 1) {
    arrayResult.push(i);
  };
  return arrayResult;
};

function translateNumBeep () {
  let arrNum = []

  for (let i = 0; i < arrNum.length; i++) {
    if (.includes(arrNum[i])) {
      break;
    };
    console.log(1)
  };
  .push("Beep!")


  letOne = 1
  console.log(letOne)
    for (let i = 0; 1 < arrNum.length; i++) {
      if (.includes(arrNum[i])) {
      break;
    };
    arrNum.push("Beep!")
  };
};

 // //UI// //
window.addEventListener("load", function () {
  const tInput = document.getElementById('tInput');
  const tOutput = document.getElementById('tOutput');

  tInput.addEventListener('keyup', (event) => {
    const translation = event.target.value
    tOutput.innerText = translation;
  });

});
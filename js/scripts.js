// //Ulitility// //
let arrNum = beepBoop()
let beepArr = arrNum.split("")
let outStr = ""

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
  const oneNum = "Beep!"
  const letOne = [1]
    for (let i = 0; 1 < arrNum.length; i++) {
      if (letOne.includes(arrNum[i])) {
      break;
    };
    oneNum += arrNum[i];
  };
};

 // //UI// //
window.addEventListener("load", function () {
  const tInput = document.getElementById('tInput');
  const tOutput = document.getElementById('tOutput');

  tInput.addEventListener('keyup', (event) => {
    const translation = event.target.value
    console.log(translation);
    tOutput.innerText = translation;
  })

});
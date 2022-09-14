// //Ulitility// //

// //BL// //
function beepBoop(number) {
  let arrayBeepBoop = parseInt(number);
  let arrayResult = [];
  for (let i = 0; i <= arrayBeepBoop; i += 1) {
    arrayResult.push(i);
  };
  return arrayResult;
};

function appearWords () {
  const arrWord = ["Bleep!","Bloop!", "Won't you be my Neighbor?"]
  let arrReturn = [];
  for (let i = 0; i <= arrWord.length ; i += 1) {
    arrReturn = arrWord
  };
  return arrReturn;
}

function translateWords (number) {
  let numOne = number
  const bleep = "Bleep!";
  let arrConvert = [];
  for (let i = 0; i <= numOne.length; i++) {
    if (numOne.includes[i] != 1) {
      break
    };
    arrConvert += 1
  }
  return arrConvert;
};

/*function translateNumBeep (beepBoop) {
  let arrNum = beepBoop
  for (let i = 0; i < arrNum.length; i++) {
    if (i.toString().includes(3)) {
      arrNum[i] = "Won't you be my neighbor?";
    } else if (i.toString().includes(2)) {
      arrNum[i] = "Boop!";
    } else if (i.toString().includes(1)) {
      arrNum[i] = "Beep!"; 
    } else {
      arrNum[i] = i.toString(); {
    };
  };
};*/

 // //UI// //
window.addEventListener("load", function () {
  const tInput = document.getElementById('tInput');
  const tOutput = document.getElementById('tOutput');

  tInput.addEventListener('keyup', (event) => {
    const translation = event.target.value
    tOutput.innerText = translation;
  });

});
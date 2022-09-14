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

function dumbWord(num) {
  let theWord = [];
  for (i = 0; i <= num; i ++) {
    if ([i].toString().includes(1)) {
      theWord.push("Bleep!");
    } else if ([i].toString().includes(2)) {
      theWord.push("Bloop!");
    } else {
      theWord.push(i); 
    };
  };
  return theWord;
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
// //BL// //
function beepBoop(number) {
  let arrayBeepBoop = parseInt(number);
  let arrayResult = [];
  for (let i = 0; i <= arrayBeepBoop; i += 1) {
    arrayResult.push(i);
  };
  return arrayResult;
};

function allWord(num) {
  let theWord = [];
  for (i = 1; i <= num; i ++) {
    if ([i].toString().includes(1)) {
      theWord.push("Bleep!");
    } else if ([i].toString().includes(2)) {
      theWord.push("Bloop!");
    } else if ([i].toString().includes(3)) {
      theWord.push("Won't you be my neighbor?")
    }  else {
      theWord.push(i); 
    } if ([i] <= (i === 100)) {
      break;
    };
  };
  return theWord;
};

 // //UI// //

window.addEventListener("load", function () {
  const tInput = document.getElementById('tInput');
  const tOutput = document.getElementById('tOutput');
  let resetBtn = document.getElementById("btn");


  tInput.addEventListener('keyup', (event) => {
    const translation = event.target.value
    tOutput.innerText = allWord(translation).join(" ");
  });

  resetBtn.addEventListener("click", function () {
    location.reload();
  });

});
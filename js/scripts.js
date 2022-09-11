  //BL//
function beepBoop() {
  let arrayBeepBoop = [0, 1, 2 ,3 , 4]
  let arrayResult = [];
  arrayBeepBoop.forEach(function(element) {
    arrayResult.push(element + 1);
    return beepBoop
  });
};


  //UI//
window.addEventListener("load", function () {
  const tInput = document.getElementById('tInput');
  const tOutput = document.getElementById('tOutput');

  tInput.addEventListener('keyup', (event) => {
    const translation = event.target.value
    console.log(translation);
    tOutput.innerText = translation;
  })

});
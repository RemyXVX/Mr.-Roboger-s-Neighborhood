window.addEventListener("load", function () {
  const tInput = document.getElementById('tInput');
  const tOutput = document.getElementById('tOutput');

  tInput.addEventListener('keyup', (event) => {
    const translation = event.target.value
    console.log(translation);
    tOutput.innerText = translation;
  })


})
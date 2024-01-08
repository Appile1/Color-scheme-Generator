let colorInput = document.getElementById("color");
let modeSelect = document.getElementById("colors");
let genBtn = document.getElementById("generate-color");

genBtn.addEventListener("click", () => {
  let selectedMode = modeSelect.value;
  fetch(
    `https://www.thecolorapi.com/scheme?rgb=${colorInput.value}&mode=${selectedMode}&count=6&format=json`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
});

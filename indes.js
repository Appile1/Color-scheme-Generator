let colorInput = document.getElementById("color");
let modeSelect = document.getElementById("colors");
let genBtn = document.getElementById("generate-color");

genBtn.addEventListener("click", () => {
  let inputColor = colorInput.value.replace(/^#/, "");
  let selectedMode = modeSelect.value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${selectedMode}&count=6&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

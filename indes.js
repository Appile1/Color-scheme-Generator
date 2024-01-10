let colorInput = document.getElementById("color");
let modeSelect = document.getElementById("colors");
let genBtn = document.getElementById("generate-color");

// Function to update the background color of a div
function updateDivColor(divId, color) {
  document.getElementById(divId).style.backgroundColor = color;
}

genBtn.addEventListener("click", () => {
  let inputColor = colorInput.value.replace(/^#/, "");
  let selectedMode = modeSelect.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${selectedMode}&count=6&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      // Extract colors from the response and update divs
      data.colors.forEach((color, index) => {
        updateDivColor(`color-show-${index + 1}`, color.hex.value);
      });
    });
});

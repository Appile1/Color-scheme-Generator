let colorInput = document.getElementById("color");
let modeSelect = document.getElementById("colors");
let genBtn = document.getElementById("generate-color");

// Function to update the background color and display hex value on a div
function updateDivColor(divId, color) {
  let colorDiv = document.getElementById(divId);
  colorDiv.style.backgroundColor = color;

  let previousHex = colorDiv.querySelector(".hex-value");
  if (previousHex) {
    colorDiv.removeChild(previousHex);
  }

  // Display the hex value on the div
  let hexValue = document.createElement("p");
  hexValue.className = "hex-value";
  hexValue.classList.add("hex");
  hexValue.textContent = color;
  colorDiv.appendChild(hexValue);
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

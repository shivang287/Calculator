const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function backspace() {
  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key.match(/[0-9+\-*/.=]/)) {
    if (e.key === "=" || e.key === "Enter") {
      calculate();
    } else if (e.key === ".") {
      appendToDisplay(".");
    } else {
      appendToDisplay(e.key);
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

// Theme switch
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light-theme", themeSwitch.checked);
});

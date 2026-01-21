//your code here
const input = document.getElementById("input");

function appendValue(value) {
  input.value += value;
}

// Number buttons
for (let i = 0; i <= 9; i++) {
  document.getElementById(`block${i}`).onclick = () => appendValue(i);
}

// Operators
document.getElementById("plus").onclick = () => appendValue("+");
document.getElementById("minus").onclick = () => appendValue("-");
document.getElementById("multiply").onclick = () => appendValue("*");
document.getElementById("divide").onclick = () => appendValue("/");

// Decimal
document.getElementById("dot").onclick = () => appendValue(".");

// Answer
document.getElementById("ans").onclick = () => {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
};

// Clear
document.getElementById("clr").onclick = () => {
  input.value = "";
};

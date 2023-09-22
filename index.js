const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const countNumber = document.querySelector("p");

let count = 0;

increaseButton.addEventListener("click", () => {
  count++;
  countNumber.textContent = count.toString();
});

decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countNumber.textContent = count.toString();
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  countNumber.textContent = count.toString();
});

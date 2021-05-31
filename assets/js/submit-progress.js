const form = document.querySelector("form");
const submitBtn = document.querySelector("form > button");
const spinner = document.querySelector("span#convert-spinner");

const toggleSpinnerInButton = (showSpinner) => {
  submitBtn.disabled = showSpinner;
  if (showSpinner) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

form.addEventListener("submit", () => {
  toggleSpinnerInButton(true);
});

window.addEventListener("focus", () => {
  toggleSpinnerInButton(false);
});

const displayEl = document.getElementById("outputOptionsQualityDisplay");
const rangeEl = document.getElementById(
  "outputOptionsQuality"
) as HTMLInputElement;

rangeEl.addEventListener("change", () => {
  displayEl.textContent = rangeEl.value;
});

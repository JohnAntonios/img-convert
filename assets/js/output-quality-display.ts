const displayEl = document.getElementById("outputOptionsQualityDisplay");
const rangeEl = document.getElementById(
  "outputOptionsQuality"
) as HTMLInputElement;

rangeEl.addEventListener("change", () => {
  if (displayEl) displayEl.textContent = rangeEl.value;
});

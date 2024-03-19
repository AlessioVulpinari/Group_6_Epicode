document.addEventListener("DOMContentLoaded", (event) => {
  const checkbox = document.getElementById("check-b");
  const button = document.getElementById("button");
  checkbox.addEventListener("change", (event) => {
    if (checkbox.checked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
  button.disabled = !checkbox.checked;
});

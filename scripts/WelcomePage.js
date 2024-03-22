document.addEventListener("DOMContentLoaded", (event) => {
  const checkbox = document.getElementById("check-b");
  const button = document.getElementById("button");
  checkbox.addEventListener("change", (event) => {
    if (checkbox.checked) {
      button.disabled = false;
      button.classList = "btnBlueNeon bold abilited";
    } else {
      button.disabled = true;
      button.classList = "btnBlueNeon bold disabilited";
    }
  });
  button.disabled = !checkbox.checked;
});

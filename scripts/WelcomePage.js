document.addEventListener("DOMContentLoaded", (event) => {
  const checkbox = document.getElementById("check-b");
  const button = document.getElementById("button");

  checkbox.addEventListener("change", (event) => {
    if (checkbox.checked) {
      button.disabled = false;
      button.classList.remove("disabilited");
      button.classList.add("abilited");
    } else {
      button.disabled = true;
      button.classList.remove("abilited");
      button.classList.add("disabilited");
    }
  });

  button.disabled = !checkbox.checked;
});

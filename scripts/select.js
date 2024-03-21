const proceedBtn = document.getElementById("proceedBtn")
const difficultySelectBox = document.getElementById("difficulty")
const maxQuestionSelectBox = document.getElementById("number")

const handleClickButton = () => {
  const selectedDifficulty =
    difficultySelectBox.options[difficultySelectBox.selectedIndex].text
  console.log(selectedDifficulty)

  const selectedMaxQuestions =
    maxQuestionSelectBox.options[maxQuestionSelectBox.selectedIndex].text
  console.log(selectedMaxQuestions)

  localStorage.setItem("difficulty", selectedDifficulty)
  localStorage.setItem("maxQuestions", selectedMaxQuestions)

  window.location.href = "/benchMarkPage.html"
}

window.onload = function () {
  proceedBtn.addEventListener("click", handleClickButton)
}

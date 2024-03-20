let points = 0
let questionNumber = 0
let totalQuestion = 10

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]

const createNewQuestion = (index) => {
  if (index <= totalQuestion) {
    const container = document.getElementById("btnContainer")
    const title = document.querySelector(".title h3")
    const questionCounter = document.querySelector("footer p")
    index = questionNumber
    let currentQuestion = questions[index]
    const answers = currentQuestion.incorrect_answers.concat(
      currentQuestion.correct_answer
    )
    for (let i = 0; i < answers.length; i++) {
      let answer = document.createElement("button")
      answer.classList.add("btn")
      answer.innerText = answers[i]
      answer.addEventListener("click", handleBtnClick)
      container.appendChild(answer)
    }
    title.innerText = currentQuestion.question
    questionCounter.innerText = `QUESTION ${
      questionNumber + 1
    }/${totalQuestion}`
  } else {
    handleSendData()
  }
}

const handleBtnClick = (e) => {
  const container = document.getElementById("btnContainer")

  const btnText = e.srcElement.innerText

  console.log(e)

  console.log(btnText)
  console.log(questions[questionNumber].correct_answer)

  if (btnText === questions[questionNumber].correct_answer) {
    points += 1
    e.srcElement.style.backgroundColor = "green"
  } else {
    e.srcElement.style.backgroundColor = "red"
  }

  questionNumber += 1

  setTimeout(() => {
    let child = container.lastChild

    while (child) {
      container.removeChild(child)
      child = container.lastChild
    }

    createNewQuestion(questionNumber)
  }, 2000)
}

const handleSendData = () => {
  localStorage.setItem("points", points)
  localStorage.setItem("totalQuestion", totalQuestion)

  window.location.href = "resultPage.html"
}

window.onload = function () {
  createNewQuestion(questionNumber)
}

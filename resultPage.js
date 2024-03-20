const calcolaPercentualeCorrette = () => {
  let correctScore = document.getElementById("correct");
  let receivedVariable = localStorage.getItem("points");
  let receivedVariable2 = localStorage.getItem("totalQuestion");
  let risposteCorrette = receivedVariable;
  let risposteTotali = receivedVariable2;
  let percentuale = (risposteCorrette / risposteTotali) * 100;

  let percentualeRisposteCorrette = percentuale.toFixed(1);

  ///PER CSS
  let progressBar = document.querySelector(".progress-circle");

  progressBar.style.setProperty(
    "--correct-percent",
    percentualeRisposteCorrette
  );
  //

  let textPercentuale = document.createElement("p");
  textPercentuale.innerText = `${percentualeRisposteCorrette}%`;

  let totRisposteCorrette = document.createElement("p");
  totRisposteCorrette.innerText = `${risposteCorrette} / ${risposteTotali} questions`;

  correctScore.appendChild(textPercentuale);

  correctScore.appendChild(totRisposteCorrette);

  calcolaPercentualeSbagliate(
    risposteCorrette,
    risposteTotali,
    percentualeRisposteCorrette
  );
};

const calcolaPercentualeSbagliate = (
  risposteCorrette,
  risposteTotali,
  percentualeRisposteCorrette
) => {
  let wrongScore = document.getElementById("wrong");
  let risposteSbagliate = risposteTotali - risposteCorrette;
  let percentualeSbagliate = (risposteSbagliate / risposteTotali) * 100;

  let percentualeRisposteSbagliate = percentualeSbagliate.toFixed(1);

  let textPercentuale = document.createElement("p");
  textPercentuale.innerText = `${percentualeRisposteSbagliate}%`;

  let totRisposteSbagliate = document.createElement("p");
  totRisposteSbagliate.innerText = `${risposteSbagliate} / ${risposteTotali} questions`;

  wrongScore.appendChild(textPercentuale);

  wrongScore.appendChild(totRisposteSbagliate);

  messageScore(percentualeRisposteCorrette, percentualeRisposteSbagliate);
};

const messageScore = (
  percentualeRisposteCorrette,
  percentualeRisposteSbagliate
) => {
  let progressBar = document.querySelector(".progress-bar");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");

  let firstP = document.createElement("p");
  let secondP = document.createElement("p");

  if (
    parseFloat(percentualeRisposteCorrette) >=
    parseFloat(percentualeRisposteSbagliate)
  ) {
    h3.innerText = "Congratulations!";
    h4.innerText = "You passed the exam.";
    firstP.innerText = "We'll send you the certificate in few minutes.";
    secondP.innerText = "Check your email (including promotions/ spam folder)";
  } else {
    h3.innerText = "Oops!";
    h4.innerText = "Unfortunately, you did not pass the exam this time.";
    firstP.innerText = "We'll provide feedback on your performance shortly.";
    secondP.innerText = "Feel free to retake the exam anytime.";
  }
  progressBar.appendChild(h3);
  progressBar.appendChild(h4);
  progressBar.appendChild(firstP);
  progressBar.appendChild(secondP);
};

document.addEventListener("DOMContentLoaded", function () {
  calcolaPercentualeCorrette();
});

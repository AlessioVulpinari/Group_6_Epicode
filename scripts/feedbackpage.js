const starContainer = document.getElementById("starContainer");
const stars = document.querySelectorAll(".star");
const feedBtn = document.getElementById("feedBtn");
const starsArray = Array.from(stars);
let starIndex = 0;

const handleEnterStar = (e) => {
  const index = getIndex(e.srcElement);
  starIndex = index;

  for (let j = 0; j <= index; j++) {
    starsArray[j].childNodes[1].style.fill = "#00FFFF";
  }

  for (let k = index + 1; k < starsArray.length; k++) {
    starsArray[k].childNodes[1].style.fill = "#2c1954";
  }
};

for (let i = 0; i < starsArray.length; i++) {
  console.log(starsArray[i]);
  starsArray[i].addEventListener("mouseenter", handleEnterStar);
}

const getIndex = (element) => starsArray.indexOf(element);

const handleClickBtn = () => {
  const messageContainer = document.getElementById("messageContainer");
  const page = document.getElementById("pageContainer");
  let tryAgain = document.getElementById("tryAgain");

  let message = "";
  if (starIndex < 6) {
    message =
      "We're truly sorry to hear about your experience. Your feedback is invaluable to us, and we're committed to addressing the issues you've encountered. Please reach out to us directly so we can make things right.";
  } else if (starIndex < 8) {
    message =
      "We're glad to hear that your experience was satisfactory, but we're always striving to improve. If there's anything specific you think we could do better, please let us know.";
  } else {
    message =
      "We're thrilled to hear that you had such a great experience. Your kind words motivate us to continue delivering excellent service. We look forward to serving you again in the future!";
  }

  page.hidden = true;
  tryAgain.hidden = false;

  let thankYouText = document.createElement("h3");
  thankYouText.className = "thankYou";
  thankYouText.innerText = `Thank you for your review!`;
  messageContainer.appendChild(thankYouText);

  const messageP = document.createElement("p");
  messageP.innerText = message;

  messageContainer.appendChild(messageP);
};

window.onload = function () {
  feedBtn.addEventListener("click", handleClickBtn);
};

let starContainer = document.getElementById("starContainer");
let stars = document.querySelectorAll(".star");
const starsArray = Array.from(stars);

const handleEnterStar = (e) => {
  const index = getIndex(e.srcElement);

  for (let j = 0; j <= index; j++) {
    starsArray[j].childNodes[1].style.fill = "#00FFFF";
  }

  for (let k = index + 1; k < starsArray.length; k++) {
    starsArray[k].childNodes[1].style.fill = "#5f2b73";
  }
};

for (let i = 0; i < starsArray.length; i++) {
  console.log(starsArray[i]);
  starsArray[i].addEventListener("mouseenter", handleEnterStar);
}

const getIndex = (element) => starsArray.indexOf(element);

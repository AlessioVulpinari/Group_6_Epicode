let starContainer = document.getElementById("starContainer")
let stars = document.querySelectorAll(".star")
const starsArray = Array.from(stars)

const handleEnterStar = (e) => {
  const index = getIndex(e.srcElement)

  for (let j = 0; j <= index; j++) {
    starsArray[j].childNodes[1].style.fill = "#00FFFF"
  }

  for (let k = index + 1; k < starsArray.length; k++) {
    starsArray[k].childNodes[1].style.fill = "#0b113b"
  }
}

for (let i = 0; i < starsArray.length; i++) {
  console.log(starsArray[i])
  starsArray[i].addEventListener("mouseenter", handleEnterStar)
}

const getIndex = (element) => starsArray.indexOf(element)


  
const bottone = document.getElementById("bottone");
bottone.addEventListener("click", function (){
    const id = document.getElementById("comment");
   
    window.alert(id.value);
})
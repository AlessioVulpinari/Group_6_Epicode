let starContainer=document.getElementById('starContainer')
let stars=document.querySelectorAll('.star')
const starsArray=Array.from(stars)
console.log(stars)
console.log(starsArray)
const handleHoverStar=(e)=> {
    const index=getIndex(e.srcElement)
    if(index!==-1){
    for(let j=0; j<=index; j++){
        starsArray[j].link.fill='red'
        console.log(starsArray[j])
    }}
    
    
    }
for(let i=0; i<starsArray.length; i++){
    console.log(starsArray[i])
    starsArray[i].addEventListener('mouseover', handleHoverStar)
}

const getIndex=(element)=> {
return starsArray.indexOf(element)
}


let btnName = document.getElementById("btnName")
let btnFontSizeMore = document.getElementById("btnFontSizeMore")
let btnFontSize_less = document.getElementById("btnFontSize_less")
let btnColor = document.getElementById("btnColor")
let btnBackgroundcolor = document.getElementById("btnBackgroundcolor")
let text = document.getElementById("text")

btnName.addEventListener("click", () =>{
    text.innerText= "welcome"
});

btnFontSizeMore.addEventListener("click", () =>{
    text.style.fontSize = "5rem"
});

btnFontSize_less.addEventListener("click", () =>{
    text.style.fontSize = "10px"
});

btnColor.addEventListener("click", () =>{
    text.style.color = "red"
});
btnBackgroundcolor.addEventListener("click", () =>{
   document.body.style.backgroundColor="gray"
});
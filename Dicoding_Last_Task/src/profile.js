
// function for typing animation
let caseChange = document.querySelector("#isi-content-p")
let i = 0;
let text = "who am i? my name is daffa putra narendra. i'm one of those who learn programming to be a web developer. i'm still student by the way. this web is my personal web to write a diary time to time and for my portfolio defenitely. keep in touch with me guys!!!!"
text = text.toUpperCase()
const speed = 30;
typingAnimation()
function typingAnimation() {
    if (i < text.length) {
        caseChange.innerHTML += text.charAt(i);
        i++;
        setTimeout(typingAnimation, speed);
    }
}

// function for slider
let index = 0
slide()

function slide(){
    let i=0
    let slides = document.getElementsByClassName("slider-study")
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none"
    }
    index++
    if(index>slides.length){
        index=1;
    }
    slides[index-1].style.display="block"
    setTimeout(slide,2000)
}


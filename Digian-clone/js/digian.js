const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides) 
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goNext = () =>{
    if (counter < slides.length - 1) {  // Prevent going past the last slide
        counter++;
        slideImage();
    }
}
const goPrev = () =>{
    if (counter > 0) {  // Prevent going before the first slide
        counter--;
        slideImage();
    }
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform =`translateX(-${counter * 100}%)`
        }
    )
}
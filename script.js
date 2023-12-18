const videoCarousel = document.querySelector(".video-carousel");
const topCarousel = document.querySelector(".top-carousel-slider");
const secondCarousel = document.querySelector(".second-carousel-slider");
const thirdCarousel = document.querySelector(".third-carousel-slider");
const topslides = Array.from(topCarousel.children);
const secondSlides =Array.from(secondCarousel.children);
const thirdSlides = Array.from(thirdCarousel.children);

let index = 0;
const videos = [
    "./videos/A World Of Stylish Designs - BlueStone.com.mp4",
    "./videos/Tanishq's Great Diamond Sale - Father & Daughter.mp4"
]
this.setInterval( ()=> {
    if(index == 0) index++;
    else index = 0;
    videoCarousel.setAttribute("src",videos[index]);
}, 29000);

const transformSlides = (slide, index) => {
    slide.style.transform = "translateX("+index * 100+"%)";
}

const slidesTransforms = (slides) => {
    slides.forEach(transformSlides);
}

slidesTransforms(topslides);
slidesTransforms(secondSlides);
slidesTransforms(thirdSlides);
let i = 0;
let j =0;
let k = 0;


this.setInterval( () => {
    const currentSlide = topCarousel.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling == null ? 
                    currentSlide.previousElementSibling : currentSlide.nextElementSibling;
    if(i == 0) {
        nextSlide.style.transform = "translateX(-100%)";
        currentSlide.style.transform = "translateX(-100%)";
        i = 1;
    }
    else {
        nextSlide.style.transform = "translateX(0%)";
        currentSlide.style.transform = "translateX(100%)";
        i = 0;
    }
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
} ,3000);

this.setInterval( () => {
    const currentSlide = secondCarousel.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling == null ? 
                    currentSlide.previousElementSibling : currentSlide.nextElementSibling;
    if(j == 0) {
        nextSlide.style.transform = "translateX(-100%)";
        currentSlide.style.transform = "translateX(-100%)";
        j = 1;
    }
    else {
        nextSlide.style.transform = "translateX(0%)";
        currentSlide.style.transform = "translateX(100%)";
        j = 0;
    }
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
} ,3000);

this.setInterval( () => {
    const currentSlide = thirdCarousel.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling == null ? 
                    currentSlide.previousElementSibling : currentSlide.nextElementSibling;
    if(k == 0) {
        nextSlide.style.transform = "translateX(-100%)";
        currentSlide.style.transform = "translateX(-100%)";
        k = 1;
    }
    else {
        nextSlide.style.transform = "translateX(0%)";
        currentSlide.style.transform = "translateX(100%)";
        k = 0;
    }
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
} ,3000);

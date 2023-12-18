const shopCarousel = document.querySelector(".shop-carousel-slider");
const slides = Array.from(shopCarousel.children);

const bestSellerSlider = document.querySelector(".best-sellers-slider");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");

const slideWidth = slides[0].getBoundingClientRect().width;

const transformSlides = (slide, index) => {
    slide.style.transform = "translateX("+index * 100+"%)";
}

slides.forEach(transformSlides);
let i =0;
this.setInterval( () => {
    const currentSlide = shopCarousel.querySelector(".current-slide");
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
},3000);
let j = 0;
leftSlider.addEventListener("click", ()=> {
    if(j == 0) bestSellerSlider.style.transform = "translateX(-100%)";
    j = 1;
});
rightSlider.addEventListener("click", ()=> {
    bestSellerSlider.style.transform = "translateX(0%)";
    j = 0;
});
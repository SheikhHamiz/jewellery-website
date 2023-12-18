const shopCarousel = document.querySelector(".shop-carousel-slider");
const slides = Array.from(shopCarousel.children);

console.log(slides);

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
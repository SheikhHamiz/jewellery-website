const videoCarousel = document.querySelector(".video-carousel");
const topCarousel = document.querySelector(".top-carousel-slider");
const secondCarousel = document.querySelector(".second-carousel-slider");
const thirdCarousel = document.querySelector(".third-carousel-slider");
const topslides = topCarousel === null ? [] : Array.from(topCarousel.children);
const secondSlides = secondCarousel === null ? [] : Array.from(secondCarousel.children);
const thirdSlides = thirdCarousel === null ? [] : Array.from(thirdCarousel.children);
const form = document.querySelector(".form");
const signUpForm = document.querySelector(".signup");
const loginForm = document.querySelector(".login");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const mobileTopCarousel = document.querySelector(".top-carousel-mobile-slider");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const user = document.querySelector(".logged");
const userProfile = document.querySelector(".not-logged");

if(signUpForm !== null && loginForm !== null) {
    signUpForm.addEventListener("submit",(e)=> e.preventDefault());
    loginForm.addEventListener("submit",(e)=>e.preventDefault());
}


let index = 0;
const videos = [
    "./videos/A World Of Stylish Designs - BlueStone.com.mp4",
    "./videos/pexels_videos_3439 (1080p).mp4"
];
if(videoCarousel !== null) {
    this.setInterval( ()=> {
        if(index == 0) index++;
        else index = 0;
        videoCarousel.setAttribute("src",videos[index]);
    }, 29000);
}

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

if(topCarousel !== null && secondCarousel !== null && thirdCarousel !== null) {
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
}

if(form !== null) {
    this.setTimeout ( ()=> {
        form.style.display = "grid";
    },3000);
}

const openSignIn = () => {
    signUpForm.style.display = "block";
    loginForm.style.display = "none";
}

const openLogin = () => {
    signUpForm.style.display = "none";
    loginForm.style.display = "block";
}

const closeForm = () => {
    form.style.display = "none"
}

let count = 0;
if( rightBtn != null && leftBtn !== null) {
    rightBtn.addEventListener("click",()=> {
        if(count === 2) return;
        count++;
        mobileTopCarousel.style.transform = "translateX(-"+count * 100+ "%)"; 
    });
    leftBtn.addEventListener("click",()=> {
        if(count === 0) return;
        count--;
        mobileTopCarousel.style.transform = "translateX(-"+count * 100+ "%)"; 
    });
}

if(menuToggle !== null)
{
    menuToggle.addEventListener("click", () => {
    if(nav.getAttribute("aria-disabled") === "true") {
        nav.setAttribute("aria-disabled", "false");
    } else {
        nav.setAttribute("aria-disabled", "true");
    }
    });
}

const loggedIn = () => {
    if(user.getAttribute("aria-disabled") === "true") {
        user.setAttribute("aria-disabled","false");
        userProfile.setAttribute("aria-disabled","true");
    }
    form.style.display = "none";
}


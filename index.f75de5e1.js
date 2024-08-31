"use strict";
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".slider__button--prev");
    const nextButton = document.querySelector(".slider__button--next");
    const sliderContainer = document.querySelector(".slider__container");
    const slides = document.querySelectorAll(".slider__image");
    let currentIndex = 0;
    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    }
    prevButton.addEventListener("click", function() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        updateSlidePosition();
    });
    nextButton.addEventListener("click", function() {
        currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        updateSlidePosition();
    });
});

//# sourceMappingURL=index.f75de5e1.js.map

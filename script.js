let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth + 20; // Inclui o margin

// Função para mover o slide
function moveSlide(step) {
    const items = document.querySelector('.carousel-items');

    if (step === 1) {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    
    items.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelector('.carousel-items');
    items.style.transform = `translateX(0px)`;
});

// Autoplay (opcional)
setInterval(() => moveSlide(1), 5000);
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length; // Total de slides
const slideWidth = slides[0].clientWidth + 20; // Largura do slide + margem
const items = document.querySelector('.carousel-items');


function moveSlide(step) {
    if (step === 1) {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    items.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

   
    if (currentIndex === 0 && step === -1) {
        items.style.transition = 'none';
        items.style.transform = `translateX(${-totalSlides * slideWidth}px)`;
        setTimeout(() => {
            items.style.transition = 'transform 0.5s ease-in-out';
        }, 20); 
    } else if (currentIndex === totalSlides - 1 && step === 1) {
        items.style.transition = 'none';
        items.style.transform = `translateX(${-totalSlides * slideWidth}px)`;
        setTimeout(() => {
            items.style.transition = 'transform 0.5s ease-in-out';
        }, 20); 
    }
}


document.querySelector('.carousel-prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.carousel-next').addEventListener('click', () => moveSlide(1));
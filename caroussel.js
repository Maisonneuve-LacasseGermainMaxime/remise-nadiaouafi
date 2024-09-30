export class Caroussel {
    constructor(carousselId) {
        this.caroussel = document.getElementById(carousselId);
        this.slides = this.caroussel.querySelectorAll('.caroussel-inner img');
        this.currentSlide = 0;

        this.showSlide(this.currentSlide);
        this.autoSlide();
        
        document.getElementById('prev').addEventListener('click', () => this.prevSlide());
        document.getElementById('next').addEventListener('click', () => this.nextSlide());
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    autoSlide() {
        setInterval(() => this.nextSlide(), 3000);
    }
}
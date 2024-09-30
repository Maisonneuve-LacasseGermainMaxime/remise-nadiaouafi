export function animateOnScroll() {
    const elements = document.querySelectorAll('h1, button');
    
    window.addEventListener('scroll', () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('animate');
            }
        });
    });
}
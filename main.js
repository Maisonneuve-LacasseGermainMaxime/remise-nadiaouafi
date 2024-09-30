import { Modal } from './modal.js';
import { Caroussel } from './caroussel.js';
import { Theme } from './theme.js';
import { animateOnScroll } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal('modal');
    const caroussel = new Caroussel('caroussel');
    const theme = new Theme('toggle-theme');
    animateOnScroll();

    setTimeout(() => {
        modal.show();
    }, 5000);
});

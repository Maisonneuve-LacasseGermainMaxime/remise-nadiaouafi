export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeBtn = document.getElementById('close-modal');
        this.closeBtn.addEventListener('click', () => this.hide());
    }

    show() {
        this.modal.classList.remove('hidden');
    }

    hide() {
        this.modal.classList.add('hidden');
    }
}
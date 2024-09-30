export class Theme {
    constructor(buttonId) {
        this.button = document.getElementById(buttonId);
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme();

        this.button.addEventListener('click', () => this.toggleTheme());
    }

    applyTheme() {
        document.body.classList.toggle('dark', this.currentTheme === 'dark');
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
    }
}
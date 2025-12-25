// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Dynamic Text for Hero Section
const phrases = [
    'here to build and create.',
    'a data-driven problem-solver.',
    'passionate about Data Science.',
    'an innovator in Machine Learning.'
];
let phraseIndex = 0;
const changingTextElement = document.getElementById('changing-text');

function changePhrase() {
    // Fade out and slide up
    changingTextElement.classList.add('opacity-0', '-translate-y-4');

    setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        changingTextElement.textContent = phrases[phraseIndex];
        // Fade in and slide down
        changingTextElement.classList.remove('opacity-0', '-translate-y-4');
    }, 500); // Matches duration-500
}

setInterval(changePhrase, 3000); // Interval set to 3s for a faster cycle.
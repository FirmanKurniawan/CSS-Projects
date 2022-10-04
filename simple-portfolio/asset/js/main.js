// Select All Projects and AOS Animate
const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {

    // AOS Animate
    card.dataset.aos = 'zoom-in';
    card.dataset.aosDelay = i * 100;
});

// AOS
AOS.init({
    once: true
});
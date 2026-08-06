document.addEventListener('DOMContentLoaded', () => {
    const introOverlay = document.getElementById('intro-overlay');
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
        }
    }, 2200);


    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const parent = q.parentElement;
            parent.classList.toggle('open');
        });
    });
});

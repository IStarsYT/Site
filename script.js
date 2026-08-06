document.addEventListener('DOMContentLoaded', () => {
    const introOverlay = document.getElementById('intro-overlay');
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
        }
    }, 2200);

    const downloadBtns = document.querySelectorAll('.download-action-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("NyxarWare İndirme Yöneticisi: Sunucu altyapısı şu anda hazırlanıyor. Dosya daha sonra eklenecektir.");
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const parent = q.parentElement;
            parent.classList.toggle('open');
        });
    });
});
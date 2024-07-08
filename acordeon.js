document.addEventListener('DOMContentLoaded', function() {
    const faqs = document.querySelectorAll('.faq h3');
    faqs.forEach(faq => {
        faq.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });
});
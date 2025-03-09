AOS.init({
    duration: 1000,
    once: true,
    disabled: 'mobile'
});

let faqsItem = document.querySelectorAll('[data-js="faq-item"]');

if (faqsItem) {
    function closeAllFaqs() {
        faqsItem.forEach(item => {
            item.classList.remove('faq-item-active');
        });
    }

    faqsItem.forEach(item => {
        item.firstElementChild.addEventListener('click', () => {
            closeAllFaqs();
            item.classList.add('faq-item-active');
        });
    });
}

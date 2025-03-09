let buttonsModal = document.querySelectorAll('[data-js="button-modal"]');
let allModals = document.querySelectorAll('[data-modal]');
let buttonCloseModal = document.querySelectorAll('[data-js="button-close"]');
let overlayCloseModal = document.querySelectorAll('.m_doacao__overlay');
let $html = document.querySelector("html");

if (buttonsModal) {
    function closeModals() {
        allModals.forEach(modalCard => {
            modalCard.classList.remove('show-modal');
        });

        $html.classList.remove('disable-scroll');
    }

    buttonCloseModal.forEach(button => {
        button.addEventListener('click', closeModals);
    });

    overlayCloseModal.forEach(overlay => {
        overlay.addEventListener('click', closeModals);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModals();
        }
    });

    buttonsModal.forEach(buttonModal => {
        buttonModal.addEventListener('click', (e) => {
            e.preventDefault();

            $html.classList.add('disable-scroll');

            allModals.forEach(modalCard => {
                if (buttonModal.dataset.modal === modalCard.dataset.modal) {
                    modalCard.classList.add('show-modal');
                }
            });
        });
    });
}

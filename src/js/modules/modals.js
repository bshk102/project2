const modals = (triggerSelector, modalSelector, closeSelector, hideTrigger = false) => {
    let clientWidth = document.documentElement.clientWidth;

    const openModal = e => {
        if (e.target) e.preventDefault();

        document.querySelector(modalSelector).style.display = 'block';
        document.body.style.overflow = 'hidden';

        let newClientWidth = document.documentElement.clientWidth;

        document.body.style.marginRight = `${scrollWidth(clientWidth, newClientWidth)}px`;
    }

    const closeModal = () => {
        document.querySelector(modalSelector).style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = 0;

        if (hideTrigger) {
            document.querySelectorAll(triggerSelector).forEach(trigger => trigger.remove());
        }
    }

    const scrollWidth = (oldWidth, newWidth) => newWidth - oldWidth;

    document.querySelectorAll(triggerSelector).forEach(trigger => trigger.addEventListener('click', e => openModal(e)));
    document.querySelectorAll(closeSelector).forEach(close => close.addEventListener('click', closeModal));
    document.querySelector(modalSelector).addEventListener('click', e => {
        if (e.target === document.querySelector(modalSelector)) {
            closeModal();
        }
    });
};

export default modals;
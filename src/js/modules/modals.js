const modals = (triggerSelector, modalSelector, closeSelector, hideTrigger = false) => {
    const modal = document.querySelector(modalSelector),
        triggers = document.querySelectorAll(triggerSelector),
        closes = document.querySelectorAll(closeSelector);

    let clientWidth = document.documentElement.clientWidth;

    const openModal = e => {
        if (e.target) e.preventDefault();

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        let newClientWidth = document.documentElement.clientWidth;

        document.body.style.marginRight = `${scrollWidth(clientWidth, newClientWidth)}px`;
    }

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = 0;

        if (hideTrigger) {
            triggers.forEach(trigger => trigger.remove());
        }
    }

    const scrollWidth = (oldWidth, newWidth) => newWidth - oldWidth;

    triggers.forEach(trigger => trigger.addEventListener('click', e => openModal(e)));
    closes.forEach(close => close.addEventListener('click', closeModal));
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
};

export default modals;
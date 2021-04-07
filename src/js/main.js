import modals from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('.button-design', '.popup-design', '.popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
});
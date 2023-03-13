'use strict'

const modalOverlay = document.querySelector('.js-modal-overlay');
const modalForm = document.querySelector('.js-modal-form');

const formShowButtons = document.querySelectorAll('.js-header-button');

formShowButtons.forEach((elem) => {
    // elem.addEventListener('click', () => {
    //     modalOverlay.classList.add('unvisible', 'visible');
    // })

    elem.onclick = () => {
        modalOverlay.classList.add('visible');
        modalForm.classList.add('visible');

    }
})

modalOverlay.onclick = () => {
    modalOverlay.classList.remove('visible');
    modalForm.classList.remove('visible');
}

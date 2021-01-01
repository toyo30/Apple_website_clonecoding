const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('Click', () => {
    selecrElement('header').classList.toggle('active');
});
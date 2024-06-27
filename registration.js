const layer = document.querySelector('#layer');
const openFormButton = document.querySelector('#open-form');
const closeFormButton = document.querySelector('#close-form');

openFormButton.addEventListener('click', () => { layer.classList.add('layer-showed') })
closeFormButton.addEventListener('click', () => { layer.classList.remove('layer-showed') })

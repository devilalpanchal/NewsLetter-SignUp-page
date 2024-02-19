const subscribeBtn = document.querySelector('.btn');
const dismissBtn = document.querySelector('.btn2');
const card01 = document.querySelector('.main-container');
const successMessage = document.querySelector('.second-Container');
const input = document.querySelector('.input');


subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim() !== '') {
        card01.classList.add('hide');
        subscribeBtn.style.background = 'black';
        successMessage.classList.remove('hide');
    } else {
        input.style.border = '2px solid red';
        input.classList.add('placeholder-red');
    }
});



dismissBtn.addEventListener('click', () => {
    card01.classList.remove('hide');
    dismissBtn.style.background = 'black'
    successMessage.classList.add('hide');

});




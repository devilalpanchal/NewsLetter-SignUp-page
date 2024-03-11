const subscribeBtn = document.querySelector('.btn');
const card01 = document.querySelector('.main-container');
const successMessage = document.querySelector('.second-Container');
const dismissBtn = document.querySelector('.btn2');
const Req = document.querySelector('.Req')

subscribeBtn.addEventListener('click', () => {
    const input = document.querySelector('.input').value;
    const FullOfEmail = document.querySelector('#FullOfEmail');

    if (input) {
        card01.classList.add('hide');
        successMessage.classList.remove('hide');
        FullOfEmail.innerText = input;
    } else {
        let require = document.createElement('div');
        require.innerText = 'Valid Email is Required';
        require.style.color = 'red';
        Req.appendChild(require);
    }
});


dismissBtn.addEventListener('click', () => {
    card01.classList.remove('hide')
    successMessage.classList.add('hide')
})












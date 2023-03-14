const form = document.querySelector('#myForm');
const message = document.querySelector('#message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fieldA = document.querySelector('#fieldA');
    const fieldB = document.querySelector('#fieldB');

    if (parseInt(fieldB.value) > parseInt(fieldA.value)) {
        message.innerHTML = '<p class="success-message">Formulário válido!</p>';
    } else {
        message.innerHTML = '<p class="error-message">Formulário inválido!</p>';
    }
});
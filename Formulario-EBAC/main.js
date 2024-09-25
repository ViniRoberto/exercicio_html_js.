document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    const messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = 'O formulário é válido. Campo B é maior que Campo A!';
        messageDiv.className = 'message valid';
    } else {
        messageDiv.textContent = 'O formulário é inválido. Campo B deve ser maior que Campo A.';
        messageDiv.className = 'message invalid';
    }
});
const formulario = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        mostrarMensagem('Muito bom, o Formulário é válido! B é maior que A.', 'success');
    } else {
        mostrarMensagem('OPSSS o Formulário é inválido! B deve ser maior que A.', 'error');
    }
});

function mostrarMensagem(mensagem, tipo) {
    resultado.textContent = mensagem;
    resultado.className = `message ${tipo}`;
    resultado.style.display = 'block';

    // Para esconder a mensagem após 3 segundos
    setTimeout(function() {
        resultado.style.display = 'none';
    }, 3000);
}
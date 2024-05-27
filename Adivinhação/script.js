let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 1;

function adivinhar() {
    const tentativaInput = document.getElementById('tentativa');
    const tentativaAtual = Number(tentativaInput.value);
    const mensagem = document.getElementById('mensagem');
    tentativas++;

    if (isNaN(tentativaAtual) || tentativaAtual < 1 || tentativaAtual > 100) {
        mensagem.textContent = "Por favor, DIGITE um número válido entre 1 e 100.";
        return;
    }

    if (tentativaAtual === numeroAleatorio) {
        mensagem.textContent = `Parabéns! Você adivinhou o número em ${tentativas} tentativas.`;
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    } else if (tentativaAtual < numeroAleatorio) {
        mensagem.textContent = "O número é maior que " + tentativaAtual + ".";
    } else {
        mensagem.textContent = "O número é menor que " + tentativaAtual + ".";
    }

    tentativaInput.value = '';
    tentativaInput.focus();
}

function desistir() {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = "Você desistiu do jogo. O número era " + numeroAleatorio + ".";
    tentativas = 0;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
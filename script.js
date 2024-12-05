const urlParams = new URLSearchParams(window.location.search);
const option = urlParams.get('option');
const audioAcerto = document.getElementById("audioAcerto");
const audioErro = document.getElementById("audioErro");
const timerElement = document.getElementById("timer");
const playPauseButton = document.getElementById("playPause");
const audioFinal = new Audio("sons/success-48018.mp3");

let timerInterval;
let isPlaying = false;
let pontuacao = 0;
let erros = 0; // Variável para contar os erros
let respostaCorreta = 0;
let tempoTotal = option === '1' ? 20 : 40;
let timeLeft = tempoTotal; // Variável para controlar o tempo restante

// Função para gerar números aleatórios
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Função para embaralhar o array de opções
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const t = Math.floor(Math.random() * (i + 1));
        [array[i], array[t]] = [array[t], array[i]];
    }
}

// Função principal para iniciar o jogo
function iniciarJogo(multiplicadores) {
    let numeros = Array.from({ length: multiplicadores }, () => randomNumberInterval(1, 10));
    respostaCorreta = numeros.reduce((acc, n) => acc * n, 1);

    let erro1 = respostaCorreta + randomNumberInterval(1, 5);
    let erro2 = respostaCorreta + randomNumberInterval(-5, -1);
    let erro3 = respostaCorreta + randomNumberInterval(5, 10);

    const opcoes = [respostaCorreta, erro1, erro2, erro3];
    embaralharArray(opcoes);

    document.getElementById('contas').textContent = numeros.join(' x ');
    document.getElementById('button1').textContent = opcoes[0];
    document.getElementById('button2').textContent = opcoes[1];
    document.getElementById('button3').textContent = opcoes[2];
    document.getElementById('button4').textContent = opcoes[3];

    const botoes = document.getElementsByClassName("respBotao");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = verificarResposta;
    }
}

// Função para verificar a resposta do jogador
function verificarResposta(event) {
    let numeroBotao = parseInt(event.target.textContent);

    audioAcerto.pause();
    audioErro.pause();
    audioAcerto.currentTime = 0;
    audioErro.currentTime = 0;

    if (numeroBotao === respostaCorreta) {
        audioAcerto.play();
        pontuacao++;
        document.getElementById('pontuacao').textContent = "Pontuação: " + pontuacao;
        document.getElementById('correto').textContent = '';
        document.getElementById('correto').style.backgroundColor = '';
    } else {
        audioErro.play();
        erros++; // Incrementa os erros
        document.getElementById('correto').textContent = 'Resposta certa: ' + respostaCorreta;
        document.getElementById('correto').style.backgroundColor = '#ff1919';
    }

    iniciarJogo(option === '1' ? 2 : 3);
}

// Função para iniciar o timer
function iniciarTimer() {
    if (isPlaying) return;

    resetarJogo();
    erros = 0; // Reseta os erros ao iniciar o jogo
    isPlaying = true;
    playPauseButton.src = "icons/botao-de-pausa.png";
    timeLeft = tempoTotal; // Reseta o tempo
    timerElement.textContent = timeLeft; // Atualiza o timer na interface

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finalizarJogo();
        }
    }, 1000);
}

// Função para resetar o jogo e a pontuação
function resetarJogo() {
    pontuacao = 0;
    document.getElementById("pontuacao").textContent = "Pontuação: " + pontuacao;
    document.getElementById("correto").textContent = ''; // Limpa mensagem de erro
    document.getElementById("correto").style.backgroundColor = ''; // Limpa cor de erro
    iniciarJogo(option === '1' ? 2 : 3);
}

// Função para finalizar o jogo e exibir o resultado final
function finalizarJogo() {
    clearInterval(timerInterval);
    audioFinal.play();
    alert("Tempo esgotado! Você acertou " + pontuacao + " perguntas e errou " + erros + " perguntas.");
    isPlaying = false;
    playPauseButton.src = "icons/botao-play.png";
    timeLeft = tempoTotal; // Reseta o tempo ao final
    timerElement.textContent = timeLeft;
}

// Evento para iniciar ou finalizar o jogo ao clicar no botão de play/pause
playPauseButton.addEventListener("click", function () {
    if (isPlaying) {
        finalizarJogo(); // Finaliza o jogo ao pausar
    } else {
        iniciarTimer(); // Inicia o jogo
    }
});

// Evento para reiniciar o jogo
document.getElementById("reiniciar").addEventListener("click", function () {
    location.reload();
});

// Evento para voltar à página inicial
document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "index.html";
});

// Inicializa o jogo com base no nível
if (option === '1') {
    tempoTotal = 20; // Define o tempo total para a opção 1
} else if (option === '2') {
    tempoTotal = 40; // Define o tempo total para a opção 2
}

// Atualiza o timer antes de iniciar o jogo
timeLeft = tempoTotal; // Atualiza o tempo restante
timerElement.textContent = timeLeft; // Exibe o tempo no elemento
iniciarJogo(option === '1' ? 2 : 3);

const urlParams = new URLSearchParams(window.location.search);
const option = urlParams.get('option');
const audioAcerto = document.getElementById("audioAcerto");
const audioErro = document.getElementById("audioErro");

function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const t = Math.floor(Math.random() * (i + 1));
        [array[i], array[t]] = [array[t], array[i]];
    }
}

function iniciarJogo(multiplicadores) {
    var pontuacao = 0;
    document.getElementById('pontuacao').textContent = "Pontuação: " + pontuacao;

    let numeros = Array.from({ length: multiplicadores }, () => randomNumberInterval(1, 10));
    let rr = numeros.reduce((acc, n) => acc * n, 1);

    let op1 = randomNumberInterval(1, 5);
    let op2 = randomNumberInterval(-5, -1);
    let op3 = randomNumberInterval(5, 10);

    let erro1 = rr + op1;
    let erro2 = rr + op2;
    let erro3 = rr + op3;

    const opcoes = [rr, erro1, erro2, erro3];
    embaralharArray(opcoes);

    document.getElementById('contas').textContent = numeros.join(' x ');
    document.getElementById('button1').textContent = opcoes[0];
    document.getElementById('button2').textContent = opcoes[1];
    document.getElementById('button3').textContent = opcoes[2];
    document.getElementById('button4').textContent = opcoes[3];

    var respostaCorreta = rr;

    function verificarResposta(event) {
        var numeroBotao = parseInt(event.target.textContent);

        // Parar e reiniciar os áudios antes de tocar o novo
        audioAcerto.pause();
        audioErro.pause();
        audioAcerto.currentTime = 0;
        audioErro.currentTime = 0;

        // Limpar a cor de fundo se acertar
        if (numeroBotao === respostaCorreta) {
            audioAcerto.play();
            pontuacao++;
            document.getElementById('pontuacao').textContent = "Pontuação: " + pontuacao;
            document.getElementById('correto').textContent = '';  // Limpa o texto ao acertar
            document.getElementById('correto').style.backgroundColor = '';  // Remove o fundo
        } else {
            audioErro.play();
            document.getElementById('correto').textContent = 'Resposta certa: ' + respostaCorreta;
            document.getElementById('correto').style.backgroundColor = '#ff1919';  // Aplica o fundo vermelho
        }

        // Gerar novos números e opções para a próxima pergunta
        numeros = Array.from({ length: multiplicadores }, () => randomNumberInterval(1, 10));
        rr = numeros.reduce((acc, n) => acc * n, 1);

        erro1 = rr + op1;
        erro2 = rr + op2;
        erro3 = rr + op3;

        opcoes[0] = rr;
        opcoes[1] = erro1;
        opcoes[2] = erro2;
        opcoes[3] = erro3;
        embaralharArray(opcoes);

        document.getElementById('contas').textContent = numeros.join(' x ');
        document.getElementById('button1').textContent = opcoes[0];
        document.getElementById('button2').textContent = opcoes[1];
        document.getElementById('button3').textContent = opcoes[2];
        document.getElementById('button4').textContent = opcoes[3];
        respostaCorreta = rr;
    }

    const botoes = document.getElementsByClassName("respBotao");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", verificarResposta);
    }
}

if (option === '1') {
    iniciarJogo(2);
} else if (option === '2') {
    iniciarJogo(3);
}

document.getElementById("reiniciar").addEventListener("click", function () {
    location.reload();
});

document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "index.html";
});

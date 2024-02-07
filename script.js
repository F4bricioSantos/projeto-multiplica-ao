  // Pegar o parâmetro da URL
  const urlParams = new URLSearchParams(window.location.search);
  const option = urlParams.get('option');
  
  // Executar parte específica do JavaScript com base no parâmetro
  if (option === '1') {
    var pontuacao = 0; // Inicializa a pontuação como 0
    document.getElementById('pontuacao').textContent = "Pontuação: " + pontuacao;
    
    function randomNumberInterval(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
    
    let NumeroUm = randomNumberInterval(1, 10);
    let NumeroDois = randomNumberInterval(1, 10);
    let op1 = randomNumberInterval(1, 5);
    let op2 = randomNumberInterval(-5, -1);
    let op3 = randomNumberInterval(5, 10);
    
    let rr = NumeroUm * NumeroDois;
    let erro1 = rr + op1;
    let erro2 = rr + op2;
    let erro3 = rr + op3;
    
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const t = Math.floor(Math.random() * (i + 1));
            [array[i], array[t]] = [array[t], array[i]];
        }
    }
    
    const opcoes = [rr, erro1, erro2, erro3];
    embaralharArray(opcoes);
    
    document.getElementById('contas').textContent = NumeroUm + ' x ' + NumeroDois;
    document.getElementById('button1').textContent = opcoes[0];
    document.getElementById('button2').textContent = opcoes[1];
    document.getElementById('button3').textContent = opcoes[2];
    document.getElementById('button4').textContent = opcoes[3];
    
    console.log(NumeroUm, NumeroDois);
    
    // Definindo a resposta correta como um número
    var respostaCorreta = rr;
    
    // Selecionando todos os botões
    var botoes = document.getElementsByClassName("respBotao");
    
    // Função para verificar a resposta
    function verificarResposta(event) {
    // Obtendo o número do botão clicado convertendo o texto em número
    var numeroBotao = parseInt(event.target.textContent);
    
    // Comparando o número do botão clicado com a resposta correta
    if (numeroBotao === respostaCorreta) {
        console.log("Resposta correta!");
        pontuacao++; // Incrementa a pontuação
        document.getElementById('pontuacao').textContent = "Pontuação: " + pontuacao; // Atualiza a pontuação na página
        document.getElementById('correto').textContent= ' '; //mostra que acertou a resposta
        // Gerar novo cálculo
        NumeroUm = randomNumberInterval(1, 10);
        NumeroDois = randomNumberInterval(1, 10);
    
        rr = NumeroUm * NumeroDois;
        erro1 = rr + op1;
        erro2 = rr + op2;
        erro3 = rr + op3;
    
        // Embaralhar as opções novamente
        opcoes[0] = rr;
        opcoes[1] = erro1;
        opcoes[2] = erro2;
        opcoes[3] = erro3;
    
        embaralharArray(opcoes);
    
        // Atualizar o conteúdo da pergunta e das opções
        document.getElementById('contas').textContent = NumeroUm + ' x ' + NumeroDois;
        document.getElementById('button1').textContent = opcoes[0];
        document.getElementById('button2').textContent = opcoes[1];
        document.getElementById('button3').textContent = opcoes[2];
        document.getElementById('button4').textContent = opcoes[3];
        
        // Atualizar a resposta correta
        respostaCorreta = rr;
    }
    else {
        console.log("Resposta incorreta. Tente novamente.");
        document.getElementById('correto').textContent= 'Resposta certa: '+ rr; //mostra a resposta certa quando erra
        // Gerar novo cálculo
        NumeroUm = randomNumberInterval(1, 10);
        NumeroDois = randomNumberInterval(1, 10);
        rr = NumeroUm * NumeroDois;
        erro1 = rr + op1;
        erro2 = rr + op2;
        erro3 = rr + op3;
        
        // Embaralhar as opções novamente
        opcoes[0] = rr;
        opcoes[1] = erro1;
        opcoes[2] = erro2;
        opcoes[3] = erro3;
        embaralharArray(opcoes);
     
        // Atualizar o conteúdo da pergunta e das opções
        document.getElementById('contas').textContent = NumeroUm + ' x ' + NumeroDois;
        document.getElementById('button1').textContent = opcoes[0];
        document.getElementById('button2').textContent = opcoes[1];
        document.getElementById('button3').textContent = opcoes[2];
        document.getElementById('button4').textContent = opcoes[3];
     
        // Atualizar a resposta correta
        respostaCorreta = rr;
     }
    }
    
    // Adicionando um ouvinte de evento de clique a cada botão
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", verificarResposta);
    }
} 
  else if (option === '2') {
    var pontuacao = 0; // Inicializa a pontuação como 0
    document.getElementById('pontuacao').textContent = "Pontuação: " + pontuacao;
    
    function randomNumberInterval(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
    
    let NumeroUm = randomNumberInterval(1, 10);
    let NumeroDois = randomNumberInterval(1, 10);
    let NumeroTres = randomNumberInterval(1, 10);
    let op1 = randomNumberInterval(1, 5);
    let op2 = randomNumberInterval(-5, -1);
    let op3 = randomNumberInterval(5, 10);
    
    let rr = NumeroUm * NumeroDois * NumeroTres;
    let erro1 = rr + op1;
    let erro2 = rr + op2;
    let erro3 = rr + op3;
    
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const t = Math.floor(Math.random() * (i + 1));
            [array[i], array[t]] = [array[t], array[i]];
        }
    }
    
    const opcoes = [rr, erro1, erro2, erro3];
    embaralharArray(opcoes);
    
    document.getElementById('contas').textContent = NumeroUm + ' x ' + NumeroDois + ' x ' + NumeroTres;
    document.getElementById('button1').textContent = opcoes[0];
    document.getElementById('button2').textContent = opcoes[1];
    document.getElementById('button3').textContent = opcoes[2];
    document.getElementById('button4').textContent = opcoes[3];
    
    console.log(NumeroUm, NumeroDois);
    
    // Definindo a resposta correta como um número
    var respostaCorreta = rr;
    
    // Selecionando todos os botões
    var botoes = document.getElementsByClassName("respBotao");
    
    // Função para verificar a resposta
    function verificarResposta(event) {
    // Obtendo o número do botão clicado convertendo o texto em número
    var numeroBotao = parseInt(event.target.textContent);
    
    // Comparando o número do botão clicado com a resposta correta
    if (numeroBotao === respostaCorreta) {
        pontuacao++; // Incrementa a pontuação
        document.getElementById('pontuacao').textContent = "Pontuação: " + pontuacao; // Atualiza a pontuação na página
        document.getElementById('correto').textContent= ' '; //mostra que acertou a resposta
        // Gerar novo cálculo
        NumeroUm = randomNumberInterval(1, 10);
        NumeroDois = randomNumberInterval(1, 10);
        NumeroTres = randomNumberInterval(1, 10);
    
        rr = NumeroUm * NumeroDois * NumeroTres;
        erro1 = rr + op1;
        erro2 = rr + op2;
        erro3 = rr + op3;
    
        // Embaralhar as opções novamente
        opcoes[0] = rr;
        opcoes[1] = erro1;
        opcoes[2] = erro2;
        opcoes[3] = erro3;
    
        embaralharArray(opcoes);
    
        // Atualizar o conteúdo da pergunta e das opções
        document.getElementById('contas').textContent = NumeroUm + ' x ' + NumeroDois + ' x ' + NumeroTres;
        document.getElementById('button1').textContent = opcoes[0];
        document.getElementById('button2').textContent = opcoes[1];
        document.getElementById('button3').textContent = opcoes[2];
        document.getElementById('button4').textContent = opcoes[3];
        
        // Atualizar a resposta correta
        respostaCorreta = rr;
    }
    else {
        document.getElementById('correto').textContent= 'Resposta certa: '+ rr; //mostra a resposta certa quando erra
        // Gerar novo cálculo
        NumeroUm = randomNumberInterval(1, 10);
        NumeroDois = randomNumberInterval(1, 10);
        NumeroTres = randomNumberInterval(1, 10);
        rr = NumeroUm * NumeroDois * NumeroTres;
        erro1 = rr + op1;
        erro2 = rr + op2;
        erro3 = rr + op3;
        
        // Embaralhar as opções novamente
        opcoes[0] = rr;
        opcoes[1] = erro1;
        opcoes[2] = erro2;
        opcoes[3] = erro3;
        embaralharArray(opcoes);
     
        // Atualizar o conteúdo da pergunta e das opções
        document.getElementById('contas').textContent = NumeroUm + ' x ' + NumeroDois + ' x ' + NumeroTres;
        document.getElementById('button1').textContent = opcoes[0];
        document.getElementById('button2').textContent = opcoes[1];
        document.getElementById('button3').textContent = opcoes[2];
        document.getElementById('button4').textContent = opcoes[3];
     
        // Atualizar a resposta correta
        respostaCorreta = rr;
     }
    }
    
    // Adicionando um ouvinte de evento de clique a cada botão
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", verificarResposta);
    }
}

  var terremoto = document.getElementById("reiniciar");
    
    // Adicionando um ouvinte de evento de clique ao elemento
    terremoto.addEventListener("click", function() {
        // Esta função será executada quando o elemento for clicado
        location. reload();
    })
  
  var voltar = document.getElementById("voltar");
    
    // Adicionando um ouvinte de evento de clique ao elemento
    voltar.addEventListener("click", function() {
        window.location.href = "index.html";
    })
let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


function ExibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Digite um número de 1 a ${numeroLimite}`);
}

ExibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('h1', 'Errou!!!');
            exibirTextoNaTela('p', 'Você errou! O número secreto é MENOR');
        } else {
            exibirTextoNaTela('h1', 'Errou!!!');
            exibirTextoNaTela('p', 'Você errou! O número secreto é MAIOR');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementoNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
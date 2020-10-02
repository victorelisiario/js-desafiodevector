export {mostraNumeros};
export {verificacao};
export {desistencia};
export {pontuacoes};


let numeroProvavel01;
let numeroProvavel02;
let numero01;
let numero02;
let resultado;
var palpitefoco = document.querySelector("[data-input]");
let pontuacao = 0;
var pontuacoes = [];


function sorteiaNumerosSomaSubtracao () {
    numeroProvavel01 = Math.round(Math.random() * 1000);
    numeroProvavel02 = Math.round(Math.random() * 1000);
}

function sorteiaNumerosMultiplicacao () {
    numeroProvavel01 = Math.round(Math.random() * 100);
    numeroProvavel02 = Math.round(Math.random() * 10);
}

function sorteiaNumerosDivisao () {
    numeroProvavel01 = Math.round(Math.random() * 10);
    numeroProvavel02 = Math.round(Math.random() * 10);
}

function backgroundVerde() {
    document.querySelector("[data-body]").style.backgroundColor = "#00FF00";
}

function backgroundNormal() {
    document.querySelector("[data-body]").style.backgroundColor = "#FFD6AF";
}

function mostraNumeros () {
    let operador = Math.floor(Math.random() * 4);
        
    if (operador == 0) {
        sorteiaNumerosSomaSubtracao ();
        numero01 = numeroProvavel01;
        numero02 = numeroProvavel02;
        document.querySelector('[data-operador]').innerHTML = "+";
        document.querySelector('[data-valor01]').innerHTML = numero01;
        document.querySelector('[data-valor02]').innerHTML = numero02;
        resultado = (numero01 + numero02);
    
    
    } else if (operador == 1) {
        sorteiaNumerosSomaSubtracao ();
        if (numeroProvavel01 > numeroProvavel02) {
            numero01 = numeroProvavel01;
            numero02 = numeroProvavel02;
        } else {
            numero01 = numeroProvavel02;
            numero02 = numeroProvavel01;
        }
        document.querySelector('[data-operador]').innerHTML = "-";
        document.querySelector('[data-valor01]').innerHTML = numero01;
        document.querySelector('[data-valor02]').innerHTML = numero02;
        resultado = (numero01 - numero02);
    
    
    } else if (operador == 2) {
        sorteiaNumerosMultiplicacao();
        numero01 = numeroProvavel01;
        numero02 = numeroProvavel02;
        document.querySelector('[data-operador]').innerHTML = "X";
        document.querySelector('[data-valor01]').innerHTML = numero01;
        document.querySelector('[data-valor02]').innerHTML = numero02;
        resultado = (numero01 * numero02);
    
    
    }else {
        sorteiaNumerosDivisao ();
    
        if (numeroProvavel01 == 0 ) {
            numeroProvavel01 += 1;       
        }
    
        if (numeroProvavel02 == 0) {
            numeroProvavel02 += 1;
        }
    
        const numerador = (numeroProvavel01 * numeroProvavel02);    
        numero01 = numerador;
        numero02 = numeroProvavel02
    
        document.querySelector('[data-operador]').innerHTML = "÷";
        document.querySelector('[data-valor01]').innerHTML = numero01;
        document.querySelector('[data-valor02]').innerHTML = numero02;
        resultado = (numeroProvavel01);   
    }

    console.log(numero01);
    console.log(numero02);
    console.log(resultado);
    console.log("----");

    
    
}

function verificacao () {
    var palpite = document.querySelector('[data-input]').value;
    
    if (resultado == palpite) {
        console.log(pontuacao);
        
        backgroundVerde();
        setTimeout(backgroundNormal, 400);
        
        mostraNumeros();
        palpite = document.querySelector('[data-input]').value = "";
        palpitefoco.focus();
        pontuacao += 1;

        pontuacoes.push(pontuacao);
        console.log(pontuacoes)

        localStorage["pontuacoes"] = JSON.stringify(pontuacoes);

    } else {
        console.log("ERROU");
        window.location.href = "telaPontuacao.html"

    }
} 

function desistencia () {
    console.log("desistiu")
    window.location.href = "telaPontuacao.html"
}


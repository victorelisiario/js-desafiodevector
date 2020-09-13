let numero01;
let numero02;
let operador;
let resultado;
var palpitefoco = document.querySelector("#input");


function sorteiaNumerosSomaSubtracao () {
    numeroProvavel01 = Math.round(Math.random() * 1000);
    numeroProvavel02 = Math.round(Math.random() * 1000);
}

function sorteiaNumerosMultiplicacao () {
    numeroProvavel01 = Math.round(Math.random() * 100);
    numeroProvavel02 = Math.round(Math.random() * 100);
}

function sorteiaNumerosDivisao () {
    numeroProvavel01 = Math.round(Math.random() * 10);
    numeroProvavel02 = Math.round(Math.random() * 10);
}

function sorteiaNumeros () {
    operador = Math.floor(Math.random() * 4);

    if (operador == 0) {
        sorteiaNumerosSomaSubtracao ();
        numero01 = numeroProvavel01;
        numero02 = numeroProvavel02;
        document.getElementById('operador').innerHTML = "+";
        document.getElementById('valor01').innerHTML = numero01;
        document.getElementById('valor02').innerHTML = numero02;
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
        document.getElementById('operador').innerHTML = "+";
        document.getElementById('valor01').innerHTML = numero01;
        document.getElementById('valor02').innerHTML = numero02;
        resultado = (numero01 + numero02);
    
    
    } else if (operador == 2) {
        sorteiaNumerosMultiplicacao();
        numero01 = numeroProvavel01;
        numero02 = numeroProvavel02;
        document.getElementById('operador').innerHTML = "X";
        document.getElementById('valor01').innerHTML = numero01;
        document.getElementById('valor02').innerHTML = numero02;
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
            numero02 = (numerador / numeroProvavel01);
        
            numero01 = numerador;
            numero02 = numeroProvavel02
        
            document.getElementById('operador').innerHTML = "÷";
            document.getElementById('valor01').innerHTML = numero01;
            document.getElementById('valor02').innerHTML = numero02;
            resultado = (numeroProvavel01);   
    }
    console.log(numero01);
    console.log(numero02);
    console.log(resultado);
    console.log("----");
}

function verificacao () {

    var palpite = document.getElementById('input').value;
    
    console.log(palpite);
    console.log(resultado);

    if (resultado == palpite) {
        console.log("ACERTOU");       
        
    } else {
        console.log("ERROU");
    }

    
    sorteiaNumeros();
    palpite = document.getElementById('input').value = "";
    palpitefoco.focus();



}

function desistencia () {
    sorteiaNumeros ();
}

sorteiaNumeros();
palpitefoco.focus();



// palpite.focus();
//sorteiaNumeros()
var botaoTentar = document.querySelector("button#tentar");
botaoTentar.onclick = verificacao;
//var botaoAtualizar = document.querySelector("button#atualizar");
//botaoAtualizar.onclick = resortear;
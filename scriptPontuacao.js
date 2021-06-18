
var pontuacao = JSON.parse(localStorage['pontuacao']);
// var ultimaPontuacao = pontiacao.slice(-1)[0]

document.querySelector('[data-pontuacao]').innerHTML = pontuacao + " ponto(s)";
console.log(pontuacao)

var pontuacoes = JSON.parse(localStorage['pontuacoes']);
var ultimaPontuacao = pontuacoes.slice(-1)[0]

document.querySelector('[data-pontuacao]').innerHTML = ultimaPontuacao + " ponto(s)";
console.log(ultimaPontuacao)
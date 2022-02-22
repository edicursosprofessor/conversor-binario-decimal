//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let
var botao = document.querySelector('#btnConverter')
var txtBinario = document.querySelector('#txtBinario')
var txtResultado = document.querySelector('#txtResultado')
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// ^ = Indica como deve ser o início do texto
// [] = Indica que é uma lista de caracteres
// + = Indica que deve encontrar dentro do texto o caracter que o precede
// $ = Indica que deve terminar o texto com o caracter que o precede
const re = /^[01]+$/;

botao.addEventListener("click", function(event) {
    let OK = re.test(txtBinario.value)
    if (!OK) {
        alert("[" + txtBinario.value + "] Não é um valor binário válido!")
    } else { 
        let binario = txtBinario.value
        let resultado = 0
        for (var i = 0; i < binario.length; i++) {
            resultado += ((binario[i] * 2) ** (binario.length - (i + 1)))
        }
        txtResultado.value = resultado
    }
    event.preventDefault()
})
//O seu desafio é: Eu preciso que o usúario digite dois números, ou seja, o seu sistema vai ter duas entradas principais, depois, utilizando função, eu preciso que o usúario digite dois números. Depois, utilizando função eu vou disponibilizar as quatro operações matematicas

  
function soma(a, b) {
return a + b
}

function subtracao(a, b) {
return a - b
}

function multi(a, b) {
return a * b
}

function divisao(a, b) {
return a / b
}

let num1 = Number(prompt("Digite o primeiro número:"));
let operacao = prompt("Escolha sua operação entre: \n1.Soma (+) \n2.Subtração (-) \n3.Multiplicação (*) \n4.Divisão (/)\n").toLowerCase()
  let num2 = Number(prompt("Digite o segundo número:"));
 if (operacao == "+" || operacao == "soma" || operacao == "1" ){
     console.log("Seu resultado é:",soma(num1, num2))
 }
 else if (operacao == "-" || operacao == "subtracao" || operacao == "2"  || operacao == "subtração" ){
     console.log("Seu resultado é:",subtracao(num1, num2))
 }
 else if (operacao == "*" || operacao == "multiplicacao" || operacao == "multiplicação" || operacao == "3" ){
     console.log("Seu resultado é:",multi(num1, num2))
 }
 else if (operacao == "/" || operacao == "divisao" || operacao == "divisão" || operacao == "4" ){
     console.log("Seu resultado é:",divisao(num1, num2))
 }
 else {
     console.log("Digite uma Operação valída")
 }



//O seu desafio �: Eu preciso que o us�ario digite dois n�meros, ou seja, o seu sistema vai ter duas entradas principais, depois, utilizando fun��o, eu preciso que o us�ario digite dois n�meros. Depois, utilizando fun��o eu vou disponibilizar as quatro opera��es matematicas

  
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

let num1 = Number(prompt("Digite o primeiro n�mero:"));
let operacao = prompt("Escolha sua opera��o entre: \n1.Soma (+) \n2.Subtra��o (-) \n3.Multiplica��o (*) \n4.Divis�o (/)\n").toLowerCase()
  let num2 = Number(prompt("Digite o segundo n�mero:"));
 if (operacao == "+" || operacao == "soma" || operacao == "1" ){
     console.log("Seu resultado �:",soma(num1, num2))
 }
 else if (operacao == "-" || operacao == "subtracao" || operacao == "2"  || operacao == "subtra��o" ){
     console.log("Seu resultado �:",subtracao(num1, num2))
 }
 else if (operacao == "*" || operacao == "multiplicacao" || operacao == "multiplica��o" || operacao == "3" ){
     console.log("Seu resultado �:",multi(num1, num2))
 }
 else if (operacao == "/" || operacao == "divisao" || operacao == "divis�o" || operacao == "4" ){
     console.log("Seu resultado �:",divisao(num1, num2))
 }
 else {
     console.log("Digite uma Opera��o val�da")
 }



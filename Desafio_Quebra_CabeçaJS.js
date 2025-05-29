/*
// C�digo 1
// Esse bloco define uma categoria de idade (crian�a, adolescente, adulta ou idosa) com base no valor da vari�vel "idade". A sa�da esperada � "Adulta".

let categoria;
let idade = 27;

if (idade < 12) {
    categoria = "Crian�a"; // Para idades menores que 12
}
else if (idade >= 12 && idade <= 18) {
    categoria = "Adolescente"; // Para idades entre 12 e 18 (inclusive)
}
else if (idade >= 60) {
    categoria = "Idosa"; // Para idades a partir de 60
}
else {
    categoria = "Adulta"; // Para idades entre 19 e 59
}

console.log("Idade final: " + idade);
console.log("Categoria:" + categoria);

/*
// C�digo 2
// Esse bloco determina a obrigatoriedade do voto com base na idade. A sa�da esperada � "Voto obrigat�rio".

idade = 25;

if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo."); // Entre 16 e 17 anos, o voto � opcional
}
else if (idade >= 18 && idade < 70) {
    console.log("Voto obrigat�rio."); // Entre 18 e 69 anos, o voto � obrigat�rio
}
else if (idade >= 70) {
    console.log("Voto facultativo."); // A partir de 70 anos, o voto volta a ser opcional
}
else {
    console.log("N�o vota."); // Menores de 16 anos n�o votam
}


// C�digo 3
// Esse bloco verifica se um n�mero � negativo, positivo ou zero. A sa�da esperada � "Negativo".a

let numero = -5;

if (numero < 0) {
    console.log("Negativo"); // N�mero menor que zero
}
else if (numero > 0) {
    console.log("Positivo"); // N�mero maior que zero
}
else {
    console.log("Zero"); // Quando o n�mero � exatamente 0
}


// C�digo 4
// Esse bloco identifica qual tipo de combust�vel foi escolhido, ou se a op��o � inv�lida. A sa�da esperada � "Gasolina".

let combustivel = "Gasolina";

if (combustivel === "Gasolina") {
    console.log("Voc� escolheu Gasolina"); // Caso o combust�vel seja Gasolina
}
else if (combustivel === "�lcool") {
    console.log("Voc� escolheu �lcool"); // Caso o combust�vel seja �lcool
}
else if (combustivel === "Diesel") {
    console.log("Voc� escolheu Diesel"); // Caso o combust�vel seja Diesel
}
else {
    console.log("Op��o inv�lida"); // Caso o valor n�o seja nenhum dos anteriores
}

*/

// C�digo 5
// Esse bloco analisa a velocidade de um ve�culo e determina a situa��o do motorista com base nela. A sa�da esperada � "Aten��o".

let velocidade = 75;

if (velocidade <= 60) {
    console.log("Dentro do limite"); // Velocidade dentro do permitido
} else if (velocidade <= 80) {
    console.log("Aten��o"); // Velocidade um pouco acima do limite, mas ainda aceit�vel com alerta
} else {
    console.log("Multado"); // Velocidade alta, sujeito a multa
}


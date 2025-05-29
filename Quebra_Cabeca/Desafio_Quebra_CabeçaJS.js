/*
// Código 1
// Esse bloco define uma categoria de idade (criança, adolescente, adulta ou idosa) com base no valor da variável "idade". A saída esperada é "Adulta".

let categoria;
let idade = 27;

if (idade < 12) {
    categoria = "Criança"; // Para idades menores que 12
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
// Código 2
// Esse bloco determina a obrigatoriedade do voto com base na idade. A saída esperada é "Voto obrigatório".

idade = 25;

if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo."); // Entre 16 e 17 anos, o voto é opcional
}
else if (idade >= 18 && idade < 70) {
    console.log("Voto obrigatório."); // Entre 18 e 69 anos, o voto é obrigatório
}
else if (idade >= 70) {
    console.log("Voto facultativo."); // A partir de 70 anos, o voto volta a ser opcional
}
else {
    console.log("Não vota."); // Menores de 16 anos não votam
}


// Código 3
// Esse bloco verifica se um número é negativo, positivo ou zero. A saída esperada é "Negativo".a

let numero = -5;

if (numero < 0) {
    console.log("Negativo"); // Número menor que zero
}
else if (numero > 0) {
    console.log("Positivo"); // Número maior que zero
}
else {
    console.log("Zero"); // Quando o número é exatamente 0
}


// Código 4
// Esse bloco identifica qual tipo de combustível foi escolhido, ou se a opção é inválida. A saída esperada é "Gasolina".

let combustivel = "Gasolina";

if (combustivel === "Gasolina") {
    console.log("Você escolheu Gasolina"); // Caso o combustível seja Gasolina
}
else if (combustivel === "Álcool") {
    console.log("Você escolheu Álcool"); // Caso o combustível seja Álcool
}
else if (combustivel === "Diesel") {
    console.log("Você escolheu Diesel"); // Caso o combustível seja Diesel
}
else {
    console.log("Opção inválida"); // Caso o valor não seja nenhum dos anteriores
}

*/

// Código 5
// Esse bloco analisa a velocidade de um veículo e determina a situação do motorista com base nela. A saída esperada é "Atenção".

let velocidade = 75;

if (velocidade <= 60) {
    console.log("Dentro do limite"); // Velocidade dentro do permitido
} else if (velocidade <= 80) {
    console.log("Atenção"); // Velocidade um pouco acima do limite, mas ainda aceitável com alerta
} else {
    console.log("Multado"); // Velocidade alta, sujeito a multa
}


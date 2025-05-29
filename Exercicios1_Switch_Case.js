/*
//Exercício 1: Crie um script que exiba diferentes saudações com base no idioma escolhido (Português, Inglês, Espanhol, etc).

let idioma = prompt("1- Português\n 2- Espanõl\n 3- Deutsh\n 4- English\nEscolha seu idioma: ").toLowerCase()
switch (idioma){
    case "português":
        case "1":
            console.log ("Bom dia!")
            break
            case "espanõl":
                case "2":
                    console.log ("Buen día")
                    break
                    case "Deutsh":
                        case "3":
                            console.log ("Guten Morgen")
                            break
                            case "english":
                                case "4":
                                    console.log ("Good Morning")
                                    break
                                    default:
                                    console.log("Idioma Inválido : (")
        
}

// Exercício 2: Escreva um código que exiba os dias da semana com base no número fornecido (1 para domingo, 2 para segunda-feira, etc.).

let dia = prompt("1-Domingo\n2-Segunda\n3-Terça\n4-Quarta\n5-Quinta\n6-Sexta\n7-Sábado\nEscolha um dia da semana com base em seu número: ").toLowerCase()
switch (dia){
    case "1":
    case "domingo":
        console.log ("Hoje é Domingo")
    break
    case "2":
        case "segunda":
            console.log ("Hoje é Segunda-Feira")
            break
            case "3":
                case "terça":
                    console.log ("Hoje é Terça-Feira")
                    break
                    case "4":
                        case "quarta":
                            console.log ("Hoje é Quarta-Feira")
                            break
                            case "5":
                                case "Quinta":
                                    console.log ("Hoje é Quinta-Feira")
                                break
                                case "6":
                                    case "sexta":
                                        console.log ("Hoje é Sexta-Feira")
                                        break
                                        case "7":
                                            case "sábado":
                                                console.log ("Hoje é Sábado")
                                                break
                                                default:
                                                console.log ("Isso não é um dia válido")
    
}

//Exercício 3: Escreva um script que exiba diferentes tipos de transporte com base no número fornecido (1 para carro, 2 para bicicleta, 3 para ônibus, etc.).

let transporte = prompt("1-Carro\n2-Bicicleta\n3-Avião\n4-Onibûs\nEscolha um veículo com base em seu número: ").toLowerCase()
switch (transporte){
    case "1":
    case "carro":
        console.log ("Seu transporte é um Carro")
    break
    case "2":
    case "bicicleta":
        console.log ("Seu transporte é uma Bicicleta")
    break
    case "3":
    case "avião":
        console.log ("Seu transporte é um Avião")
    break
    case "4":
    case "trator":
        console.log ("Seu transporte é um Trator")
    break
    default:
    console.log ("Digite um transporte válido!")
   
    
}

//Exercício 4: Desenvolva um programa que classifique diferentes níveis de urgência com base em um número fornecido (1 para baixa, 2 para média, 3 para alta).

let alerta = prompt("Defina um nível de alerta de 1 a 3: ").toLowerCase()
switch (alerta){
    case "1":
        console.log ("Alerta Baixo, fique tranquilo!")
    break
    case "2":
        console.log ("Alerta Moderado, fique atento!")
        break
        case "3":
        console.log ("Alerta Alto, fuja!!!")
        break
        default:
        console.log("Alerta inválido!")
}

//Exercício 5: Crie um código que exiba diferentes tipos de veículos com base na categoria (compacto, SUV, caminhão).

let categoria = prompt("1-SUV\n2-Compacto\n3-Caminhão\nDefina qual das categorias acima você procura: ").toLowerCase()
switch (categoria) {
    case "1":
        case "SUV":
            console.log ("Aqui algumas opções de SUV:\n \n1-) Toyota SW4 (Hilux SW4)\n2-) Jeep Compass\n3-) Volkswagen T-Cross")
            break
            case "2":
        case "compacto":
            console.log ("Aqui algumas opções de compactos:\n \n1-) Chevrolet Onix\n2-) Hyundai HB20\n3-) Fiat Argo")
            break
            case "3":
        case "caminhões":
            console.log ("Aqui algumas opções de caminhões:\n \n1-) Scania R Series\n2-) Volvo FH\n3-) Mercedes-Benz Actros")
            break
            
}

//Exercício 6: Desenvolva um programa que calcule diferentes tarifas de estacionamento com base na duração do tempo estacionado.

let tarifa = prompt("1- Menos de uma hora\n2- 1 hora\n3- Horas adicionais\n4- Diária\nQuanto foi o tempo que você ficou estacionado?: ").toLowerCase()

switch (tarifa) {
    case "1":
        console.log("R$ 5.00") // Menos de uma hora
        break
    case "2":
        console.log("R$ 7.00") // 1 hora
        break
    case "3":
        console.log("R$ 3.00 por hora adicional") // Horas adicionais
        break
    case "4":
        console.log("R$ 30.00") // Diária
        break
    default:
        console.log("Opção inválida. Por favor, digite 1, 2, 3 ou 4.")
}

//Exercício 7: Escreva um script que exiba diferentes níveis de dificuldade em jogos com base no número fornecido (1 para fácil, 2 para médio, 3 para difícil).

    let nivel = prompt("1- Dificuldade Facíl\n2- Dificuldade Normal\n3- Dificuldade Difíl\n4- Dificuldade Ultra Difícil\n\nEscolha uma dificuldade: ").toLowerCase()
switch (nivel){
    case "1":
        console.log ("Dificuldade Facíl Selecionada (Muito ruim kkkk)")
    break
    case "2":
        console.log ("Dificuldade Normal Selcionada (Jogador Padrão)")
        break
        case "3":
        console.log ("Dificuldade Difíl Selcionada (Brabo ein)")
        break
        case "4":
        console.log ("Dificuldade Ultra Difícil Selcionada (Aqui Vemos um homem de verdade!!!)")
        break
        default:
        console.log("Dificuldade inválida!")
}

//Exercício 8: Crie um código que determine diferentes tipos de serviços oferecidos por uma academia com base na categoria (aula de yoga, musculação, personal trainer).

let categoria = prompt("Categorias\n1 - Aula de Yoga\n2 - Musculação\n3 - Personal Trainer\nEscolha uma categoria de serviço: ").toLowerCase()

switch (categoria) {
    case "1":
    case "aula de yoga":
        console.log("Você escolheu Aula de Yoga.\nServiços inclusos:\n- Sessões semanais de yoga\n- Técnicas de respiração e meditação\n- Ambiente relaxante com música suave")
        break
    case "2":
    case "musculação":
        console.log("Você escolheu Musculação.\nServiços inclusos:\n- Acesso livre à sala de musculação\n- Acompanhamento básico com instrutor\n- Avaliação física mensal")
        break
    case "3":
    case "personal trainer":
        console.log("Você escolheu Personal Trainer.\nServiços inclusos:\n- Treinos personalizados\n- Acompanhamento individual\n- Plano de alimentação e metas")
        break
    default:
        console.log("Categoria inválida. Por favor, digite 1, 2 ou 3 ou o nome da categoria.")
}

//Exercício 9: Escreva um script que exiba diferentes preços de ingressos para um evento com base na categoria escolhida (estudante, meia entrada, inteira).

let entrada = prompt("1 - Estudante\n2 - Meia entrada\n3 - Inteira\nEscolha a categoria do ingresso: ").toLowerCase()

switch (entrada) {
    case "1":
    case "estudante":
        console.log("Você escolheu Estudante.\nPreço do ingresso: R$ 15.00")
        break
    case "2":
    case "meia entrada":
        console.log("Você escolheu Meia entrada.\nPreço do ingresso: R$ 20.00")
        break
    case "3":
    case "inteira":
        console.log("Você escolheu Inteira.\nPreço do ingresso: R$ 40.00")
        break
    default:
        console.log("Categoria inválida. Por favor, escolha 1, 2 ou 3 ou digite o nome da categoria.")
        break
}

//Exercício 10: Crie um código que determine diferentes níveis de dificuldade em exercícios físicos com base na faixa etária do praticante.

let idade = Number(prompt("Informe sua idade: "))

switch (true) {
    case (idade <= 12 && idade > 0):
        console.log("Faixa etária: Criança\nNível de dificuldade recomendado: Leve\n- Atividades lúdicas\n- Corridas leves\n- Alongamentos")
        break
    case (idade <= 18 && idade > 12):
        console.log("Faixa etária: Adolescente\nNível de dificuldade recomendado: Moderado\n- Treinos funcionais\n- Esportes em grupo\n- Exercícios com peso corporal")
        break
    case (idade <= 50 && idade > 18):
        console.log("Faixa etária: Adulto\nNível de dificuldade recomendado: Intenso\n- Musculação\n- Cardio avançado\n- HIIT")
        break
    case (idade > 50 && idade <121):
        console.log("Faixa etária: Idoso\nNível de dificuldade recomendado: Leve a Moderado\n- Caminhadas\n- Pilates\n- Exercícios de mobilidade")
        break
    default:
        console.log("Idade inválida. Por favor, digite um número válido.")
}
//Exercício 11: Desenvolva um programa que exiba diferentes tipos de instrumentos musicais com base no gênero musical.

let genero = prompt("1 - Rock\n2 - Samba\n3 - Música Clássica\n4 - Pop\nEscolha um gênero musical: ").toLowerCase()

switch (genero) {
    case "1":
    case "rock":
        console.log("Gênero escolhido: Rock\nInstrumentos comuns:\n- Guitarra elétrica\n- Baixo\n- Bateria\n- Teclado")
        break
    case "2":
    case "samba":
        console.log("Gênero escolhido: Samba\nInstrumentos comuns:\n- Pandeiro\n- Cavaquinho\n- Violão\n- Tamborim")
        break
    case "3":
    case "música clássica":
    case "musica classica":
        console.log("Gênero escolhido: Música Clássica\nInstrumentos comuns:\n- Violino\n- Violoncelo\n- Piano\n- Flauta\n- Harpa")
        break
    case "4":
    case "pop":
        console.log("Gênero escolhido: Pop\nInstrumentos comuns:\n- Teclado\n- Guitarra\n- Bateria eletrônica\n- Synths")
        break
    default:
        console.log("Gênero inválido. Por favor, digite 1, 2, 3 ou 4 ou o nome do gênero musical.")
}

//Exercício 12: Crie um código que exiba diferentes tipos de cursos oferecidos em uma escola de tecnologia com base na área (front-end, back-end, mobile).

let area = prompt("1 - Front-end\n2 - Back-end\n3 - Mobile\nEscolha uma área do TI: ").toLowerCase()

switch (area) {
    case "1":
    case "front-end":
        console.log("Área escolhida: Front-end\nCursos disponíveis:\n- HTML e CSS\n- JavaScript Avançado\n- React.js\n- UI/UX Design")
        break
    case "2":
    case "back-end":
        console.log("Área escolhida: Back-end\nCursos disponíveis:\n- Node.js\n- Banco de Dados (SQL e NoSQL)\n- API RESTful\n- Autenticação e Segurança")
        break
    case "3":
    case "mobile":
        console.log("Área escolhida: Mobile\nCursos disponíveis:\n- React Native\n- Flutter\n- Desenvolvimento Android com Kotlin\n- Desenvolvimento iOS com Swift")
        break
    default:
        console.log("Área inválida. Por favor, digite 1, 2 ou 3 ou o nome da área.")
}

//Exercício 13: Desenvolva um programa que determine diferentes níveis de habilidade em esportes com base na idade do atleta.

let idade = prompt("Informe a idade do atleta: ")

switch (true) {
    case (idade > 0 && idade <= 8):
        console.log("Faixa etária: Infantil\nNível de habilidade: Iniciante\nCaracterísticas: Coordenação motora em desenvolvimento, jogos lúdicos e atividades básicas.")
        break
    case (idade <= 14):
        console.log("Faixa etária: Pré-adolescente\nNível de habilidade: Intermediário\nCaracterísticas: Desenvolvimento técnico e motor, introdução a regras e táticas.")
        break
    case (idade <= 25):
        console.log("Faixa etária: Jovem/Adulto\nNível de habilidade: Avançado\nCaracterísticas: Alta performance, treinos intensos, competições e estratégias complexas.")
        break
    case (idade <= 40):
        console.log("Faixa etária: Adulto\nNível de habilidade: Avançado\nCaracterísticas: Manutenção da performance, experiência tática, foco em resistência e recuperação.")
        break
    case (idade > 40):
        console.log("Faixa etária: Master\nNível de habilidade: Adaptado\nCaracterísticas: Treinos com foco em saúde, longevidade e técnicas ajustadas para o corpo.")
        break
    default:
        console.log("Idade inválida. Por favor, digite um número positivo.")
}*/

//Exercício 14: Escreva um script que exiba diferentes níveis de dificuldade em desafios matemáticos com base na categoria (básico, intermediário, avançado).
let categoria = prompt("Escolha a categoria de desafio matemático:\n1 - Básico\n2 - Intermediário\n3 - Avançado\n").toLowerCase()

switch (categoria) {
    case "1":
    case "básico":
    case "basico":
        console.log("Categoria: Básico\nDesafios incluídos:\n- Adição e subtração\n- Multiplicação e divisão simples\n- Problemas com números naturais\n- Sequências numéricas fáceis")
        break
    case "2":
    case "intermediário":
    case "intermediario":
        console.log("Categoria: Intermediário\nDesafios incluídos:\n- Frações e porcentagens\n- Equações de 1º grau\n- Medidas e unidades\n- Problemas com raciocínio lógico")
        break
    case "3":
    case "avançado":
        console.log("Categoria: Avançado\nDesafios incluídos:\n- Equações de 2º grau\n- Sistemas lineares\n- Funções\n- Probabilidade e estatística\n- Geometria analítica")
        break
    default:
        console.log("Categoria inválida. Por favor, digite 1, 2 ou 3 ou o nome da categoria.")
}
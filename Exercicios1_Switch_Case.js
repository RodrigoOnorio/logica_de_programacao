/*
//Exerc�cio 1: Crie um script que exiba diferentes sauda��es com base no idioma escolhido (Portugu�s, Ingl�s, Espanhol, etc).

let idioma = prompt("1- Portugu�s\n 2- Espan�l\n 3- Deutsh\n 4- English\nEscolha seu idioma: ").toLowerCase()
switch (idioma){
    case "portugu�s":
        case "1":
            console.log ("Bom dia!")
            break
            case "espan�l":
                case "2":
                    console.log ("Buen d�a")
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
                                    console.log("Idioma Inv�lido : (")
        
}

// Exerc�cio 2: Escreva um c�digo que exiba os dias da semana com base no n�mero fornecido (1 para domingo, 2 para segunda-feira, etc.).

let dia = prompt("1-Domingo\n2-Segunda\n3-Ter�a\n4-Quarta\n5-Quinta\n6-Sexta\n7-S�bado\nEscolha um dia da semana com base em seu n�mero: ").toLowerCase()
switch (dia){
    case "1":
    case "domingo":
        console.log ("Hoje � Domingo")
    break
    case "2":
        case "segunda":
            console.log ("Hoje � Segunda-Feira")
            break
            case "3":
                case "ter�a":
                    console.log ("Hoje � Ter�a-Feira")
                    break
                    case "4":
                        case "quarta":
                            console.log ("Hoje � Quarta-Feira")
                            break
                            case "5":
                                case "Quinta":
                                    console.log ("Hoje � Quinta-Feira")
                                break
                                case "6":
                                    case "sexta":
                                        console.log ("Hoje � Sexta-Feira")
                                        break
                                        case "7":
                                            case "s�bado":
                                                console.log ("Hoje � S�bado")
                                                break
                                                default:
                                                console.log ("Isso n�o � um dia v�lido")
    
}

//Exerc�cio 3: Escreva um script que exiba diferentes tipos de transporte com base no n�mero fornecido (1 para carro, 2 para bicicleta, 3 para �nibus, etc.).

let transporte = prompt("1-Carro\n2-Bicicleta\n3-Avi�o\n4-Onib�s\nEscolha um ve�culo com base em seu n�mero: ").toLowerCase()
switch (transporte){
    case "1":
    case "carro":
        console.log ("Seu transporte � um Carro")
    break
    case "2":
    case "bicicleta":
        console.log ("Seu transporte � uma Bicicleta")
    break
    case "3":
    case "avi�o":
        console.log ("Seu transporte � um Avi�o")
    break
    case "4":
    case "trator":
        console.log ("Seu transporte � um Trator")
    break
    default:
    console.log ("Digite um transporte v�lido!")
   
    
}

//Exerc�cio 4: Desenvolva um programa que classifique diferentes n�veis de urg�ncia com base em um n�mero fornecido (1 para baixa, 2 para m�dia, 3 para alta).

let alerta = prompt("Defina um n�vel de alerta de 1 a 3: ").toLowerCase()
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
        console.log("Alerta inv�lido!")
}

//Exerc�cio 5: Crie um c�digo que exiba diferentes tipos de ve�culos com base na categoria (compacto, SUV, caminh�o).

let categoria = prompt("1-SUV\n2-Compacto\n3-Caminh�o\nDefina qual das categorias acima voc� procura: ").toLowerCase()
switch (categoria) {
    case "1":
        case "SUV":
            console.log ("Aqui algumas op��es de SUV:\n \n1-) Toyota SW4 (Hilux SW4)\n2-) Jeep Compass\n3-) Volkswagen T-Cross")
            break
            case "2":
        case "compacto":
            console.log ("Aqui algumas op��es de compactos:\n \n1-) Chevrolet Onix\n2-) Hyundai HB20\n3-) Fiat Argo")
            break
            case "3":
        case "caminh�es":
            console.log ("Aqui algumas op��es de caminh�es:\n \n1-) Scania R Series\n2-) Volvo FH\n3-) Mercedes-Benz Actros")
            break
            
}

//Exerc�cio 6: Desenvolva um programa que calcule diferentes tarifas de estacionamento com base na dura��o do tempo estacionado.

let tarifa = prompt("1- Menos de uma hora\n2- 1 hora\n3- Horas adicionais\n4- Di�ria\nQuanto foi o tempo que voc� ficou estacionado?: ").toLowerCase()

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
        console.log("R$ 30.00") // Di�ria
        break
    default:
        console.log("Op��o inv�lida. Por favor, digite 1, 2, 3 ou 4.")
}

//Exerc�cio 7: Escreva um script que exiba diferentes n�veis de dificuldade em jogos com base no n�mero fornecido (1 para f�cil, 2 para m�dio, 3 para dif�cil).

    let nivel = prompt("1- Dificuldade Fac�l\n2- Dificuldade Normal\n3- Dificuldade Dif�l\n4- Dificuldade Ultra Dif�cil\n\nEscolha uma dificuldade: ").toLowerCase()
switch (nivel){
    case "1":
        console.log ("Dificuldade Fac�l Selecionada (Muito ruim kkkk)")
    break
    case "2":
        console.log ("Dificuldade Normal Selcionada (Jogador Padr�o)")
        break
        case "3":
        console.log ("Dificuldade Dif�l Selcionada (Brabo ein)")
        break
        case "4":
        console.log ("Dificuldade Ultra Dif�cil Selcionada (Aqui Vemos um homem de verdade!!!)")
        break
        default:
        console.log("Dificuldade inv�lida!")
}

//Exerc�cio 8: Crie um c�digo que determine diferentes tipos de servi�os oferecidos por uma academia com base na categoria (aula de yoga, muscula��o, personal trainer).

let categoria = prompt("Categorias\n1 - Aula de Yoga\n2 - Muscula��o\n3 - Personal Trainer\nEscolha uma categoria de servi�o: ").toLowerCase()

switch (categoria) {
    case "1":
    case "aula de yoga":
        console.log("Voc� escolheu Aula de Yoga.\nServi�os inclusos:\n- Sess�es semanais de yoga\n- T�cnicas de respira��o e medita��o\n- Ambiente relaxante com m�sica suave")
        break
    case "2":
    case "muscula��o":
        console.log("Voc� escolheu Muscula��o.\nServi�os inclusos:\n- Acesso livre � sala de muscula��o\n- Acompanhamento b�sico com instrutor\n- Avalia��o f�sica mensal")
        break
    case "3":
    case "personal trainer":
        console.log("Voc� escolheu Personal Trainer.\nServi�os inclusos:\n- Treinos personalizados\n- Acompanhamento individual\n- Plano de alimenta��o e metas")
        break
    default:
        console.log("Categoria inv�lida. Por favor, digite 1, 2 ou 3 ou o nome da categoria.")
}

//Exerc�cio 9: Escreva um script que exiba diferentes pre�os de ingressos para um evento com base na categoria escolhida (estudante, meia entrada, inteira).

let entrada = prompt("1 - Estudante\n2 - Meia entrada\n3 - Inteira\nEscolha a categoria do ingresso: ").toLowerCase()

switch (entrada) {
    case "1":
    case "estudante":
        console.log("Voc� escolheu Estudante.\nPre�o do ingresso: R$ 15.00")
        break
    case "2":
    case "meia entrada":
        console.log("Voc� escolheu Meia entrada.\nPre�o do ingresso: R$ 20.00")
        break
    case "3":
    case "inteira":
        console.log("Voc� escolheu Inteira.\nPre�o do ingresso: R$ 40.00")
        break
    default:
        console.log("Categoria inv�lida. Por favor, escolha 1, 2 ou 3 ou digite o nome da categoria.")
        break
}

//Exerc�cio 10: Crie um c�digo que determine diferentes n�veis de dificuldade em exerc�cios f�sicos com base na faixa et�ria do praticante.

let idade = Number(prompt("Informe sua idade: "))

switch (true) {
    case (idade <= 12 && idade > 0):
        console.log("Faixa et�ria: Crian�a\nN�vel de dificuldade recomendado: Leve\n- Atividades l�dicas\n- Corridas leves\n- Alongamentos")
        break
    case (idade <= 18 && idade > 12):
        console.log("Faixa et�ria: Adolescente\nN�vel de dificuldade recomendado: Moderado\n- Treinos funcionais\n- Esportes em grupo\n- Exerc�cios com peso corporal")
        break
    case (idade <= 50 && idade > 18):
        console.log("Faixa et�ria: Adulto\nN�vel de dificuldade recomendado: Intenso\n- Muscula��o\n- Cardio avan�ado\n- HIIT")
        break
    case (idade > 50 && idade <121):
        console.log("Faixa et�ria: Idoso\nN�vel de dificuldade recomendado: Leve a Moderado\n- Caminhadas\n- Pilates\n- Exerc�cios de mobilidade")
        break
    default:
        console.log("Idade inv�lida. Por favor, digite um n�mero v�lido.")
}
//Exerc�cio 11: Desenvolva um programa que exiba diferentes tipos de instrumentos musicais com base no g�nero musical.

let genero = prompt("1 - Rock\n2 - Samba\n3 - M�sica Cl�ssica\n4 - Pop\nEscolha um g�nero musical: ").toLowerCase()

switch (genero) {
    case "1":
    case "rock":
        console.log("G�nero escolhido: Rock\nInstrumentos comuns:\n- Guitarra el�trica\n- Baixo\n- Bateria\n- Teclado")
        break
    case "2":
    case "samba":
        console.log("G�nero escolhido: Samba\nInstrumentos comuns:\n- Pandeiro\n- Cavaquinho\n- Viol�o\n- Tamborim")
        break
    case "3":
    case "m�sica cl�ssica":
    case "musica classica":
        console.log("G�nero escolhido: M�sica Cl�ssica\nInstrumentos comuns:\n- Violino\n- Violoncelo\n- Piano\n- Flauta\n- Harpa")
        break
    case "4":
    case "pop":
        console.log("G�nero escolhido: Pop\nInstrumentos comuns:\n- Teclado\n- Guitarra\n- Bateria eletr�nica\n- Synths")
        break
    default:
        console.log("G�nero inv�lido. Por favor, digite 1, 2, 3 ou 4 ou o nome do g�nero musical.")
}

//Exerc�cio 12: Crie um c�digo que exiba diferentes tipos de cursos oferecidos em uma escola de tecnologia com base na �rea (front-end, back-end, mobile).

let area = prompt("1 - Front-end\n2 - Back-end\n3 - Mobile\nEscolha uma �rea do TI: ").toLowerCase()

switch (area) {
    case "1":
    case "front-end":
        console.log("�rea escolhida: Front-end\nCursos dispon�veis:\n- HTML e CSS\n- JavaScript Avan�ado\n- React.js\n- UI/UX Design")
        break
    case "2":
    case "back-end":
        console.log("�rea escolhida: Back-end\nCursos dispon�veis:\n- Node.js\n- Banco de Dados (SQL e NoSQL)\n- API RESTful\n- Autentica��o e Seguran�a")
        break
    case "3":
    case "mobile":
        console.log("�rea escolhida: Mobile\nCursos dispon�veis:\n- React Native\n- Flutter\n- Desenvolvimento Android com Kotlin\n- Desenvolvimento iOS com Swift")
        break
    default:
        console.log("�rea inv�lida. Por favor, digite 1, 2 ou 3 ou o nome da �rea.")
}

//Exerc�cio 13: Desenvolva um programa que determine diferentes n�veis de habilidade em esportes com base na idade do atleta.

let idade = prompt("Informe a idade do atleta: ")

switch (true) {
    case (idade > 0 && idade <= 8):
        console.log("Faixa et�ria: Infantil\nN�vel de habilidade: Iniciante\nCaracter�sticas: Coordena��o motora em desenvolvimento, jogos l�dicos e atividades b�sicas.")
        break
    case (idade <= 14):
        console.log("Faixa et�ria: Pr�-adolescente\nN�vel de habilidade: Intermedi�rio\nCaracter�sticas: Desenvolvimento t�cnico e motor, introdu��o a regras e t�ticas.")
        break
    case (idade <= 25):
        console.log("Faixa et�ria: Jovem/Adulto\nN�vel de habilidade: Avan�ado\nCaracter�sticas: Alta performance, treinos intensos, competi��es e estrat�gias complexas.")
        break
    case (idade <= 40):
        console.log("Faixa et�ria: Adulto\nN�vel de habilidade: Avan�ado\nCaracter�sticas: Manuten��o da performance, experi�ncia t�tica, foco em resist�ncia e recupera��o.")
        break
    case (idade > 40):
        console.log("Faixa et�ria: Master\nN�vel de habilidade: Adaptado\nCaracter�sticas: Treinos com foco em sa�de, longevidade e t�cnicas ajustadas para o corpo.")
        break
    default:
        console.log("Idade inv�lida. Por favor, digite um n�mero positivo.")
}*/

//Exerc�cio 14: Escreva um script que exiba diferentes n�veis de dificuldade em desafios matem�ticos com base na categoria (b�sico, intermedi�rio, avan�ado).
let categoria = prompt("Escolha a categoria de desafio matem�tico:\n1 - B�sico\n2 - Intermedi�rio\n3 - Avan�ado\n").toLowerCase()

switch (categoria) {
    case "1":
    case "b�sico":
    case "basico":
        console.log("Categoria: B�sico\nDesafios inclu�dos:\n- Adi��o e subtra��o\n- Multiplica��o e divis�o simples\n- Problemas com n�meros naturais\n- Sequ�ncias num�ricas f�ceis")
        break
    case "2":
    case "intermedi�rio":
    case "intermediario":
        console.log("Categoria: Intermedi�rio\nDesafios inclu�dos:\n- Fra��es e porcentagens\n- Equa��es de 1� grau\n- Medidas e unidades\n- Problemas com racioc�nio l�gico")
        break
    case "3":
    case "avan�ado":
        console.log("Categoria: Avan�ado\nDesafios inclu�dos:\n- Equa��es de 2� grau\n- Sistemas lineares\n- Fun��es\n- Probabilidade e estat�stica\n- Geometria anal�tica")
        break
    default:
        console.log("Categoria inv�lida. Por favor, digite 1, 2 ou 3 ou o nome da categoria.")
}
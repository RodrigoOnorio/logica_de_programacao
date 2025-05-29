let pergunta1 = prompt("Qual você quer aprender?\n1- Linux\n2- CMD (Windows)\n>").toLowerCase()

if (pergunta1 == "1" || pergunta1 == "linux") {
    let perguntaLinux = prompt("Qual comando do Linux você tem dúvida?\n1- ls\n2- mkdir\n3- echo\n4- rmdir\n5- cd e cd..\n6- cat\n7- mv\n8- cp\n9- clear\n10- pwd\n>").toLowerCase()

    switch (perguntaLinux) {
        case "1":
        case "ls":
            console.log("ls - Lista arquivos e diretórios.\nExemplo: ls -l")
            break
        case "2":
        case "mkdir":
            console.log("mkdir - Cria um novo diretório.\nExemplo: mkdir nova_pasta")
            break
        case "3":
        case "echo":
            console.log("echo - Exibe texto ou grava em arquivos.\nExemplo: echo 'Olá mundo' > mensagem.txt")
            break
        case "4":
        case "rmdir":
            console.log("rmdir - Remove diretórios vazios.\nExemplo: rmdir pasta_vazia")
            break
        case "5":
        case "cd":
        case "cd..":
        case "cd ..":
            console.log("cd - Navega entre diretórios.\nExemplo: cd documentos\nPara voltar: cd ..")
            break
        case "6":
        case "cat":
            console.log("cat - Mostra o conteúdo de um arquivo.\nExemplo: cat texto.txt")
            break
        case "7":
        case "mv":
            console.log("mv - Move ou renomeia arquivos.\nExemplo: mv antigo.txt novo.txt")
            break
        case "8":
        case "cp":
            console.log("cp - Copia arquivos.\nExemplo: cp original.txt copia.txt")
            break
        case "9":
        case "clear":
            console.log("clear - Limpa a tela do terminal.\nExemplo: clear")
            break
        case "10":
        case "pwd":
            console.log("pwd - Mostra o caminho do diretório atual.\nExemplo: pwd")
            break
        default:
            console.log("Comando não reconhecido.")
    }
} else if (pergunta1 == "2" || pergunta1 == "cmd" || pergunta1 == "windows") {
    let perguntaCmd = prompt("Qual comando do CMD você tem dúvida?\n1- mkdir\n2- dir\n3- cd e cd..\n4- del\n5- cls\n6- echo\n7- copy\n8- move\n9- rmdir\n10- exit\n>").toLowerCase()

    switch (perguntaCmd) {
        case "1":
        case "mkdir":
            console.log("mkdir - Cria uma nova pasta.\nExemplo: mkdir nova_pasta")
            break
        case "2":
        case "dir":
            console.log("dir - Lista arquivos e pastas.\nExemplo: dir")
            break
        case "3":
        case "cd":
        case "cd..":
        case "cd ..":
            console.log("cd - Entra em uma pasta.\nExemplo: cd documentos\nPara voltar: cd..")
            break
        case "4":
        case "del":
            console.log("del - Apaga arquivos.\nExemplo: del lixo.txt")
            break
        case "5":
        case "cls":
            console.log("cls - Limpa a tela do CMD.\nExemplo: cls")
            break
        case "6":
        case "echo":
            console.log("echo - Escreve texto na tela ou em arquivos.\nExemplo: echo Hello > saudacao.txt")
            break
        case "7":
        case "copy":
            console.log("copy - Copia arquivos.\nExemplo: copy arquivo.txt copia.txt")
            break
        case "8":
        case "move":
            console.log("move - Move ou renomeia arquivos.\nExemplo: move doc.txt C:\\Arquivos")
            break
        case "9":
        case "rmdir":
            console.log("rmdir - Remove pastas vazias.\nExemplo: rmdir antiga_pasta")
            break
        case "10":
        case "exit":
            console.log("exit - Fecha o terminal.\nExemplo: exit")
            break
        default:
            console.log("Comando não reconhecido.")
    }
} else {
    console.log("Opção inválida. Tente novamente.")
}

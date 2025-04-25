function nomeUsuario() {
    let nome = prompt("Qual o seu nome?")
    return nome
}

function idadeUsuario() {
    let idade = prompt("Qual a sua idade?")
    return idade
}

function exibirUsuario(nome, idade) {
    console.log("Olá " + nome + ", voce tem " + idade + " anos!")
}

function executar() {
    let nome = nomeUsuario()
    let idade = idadeUsuario()
    exibirUsuario(nome, idade)
}

executar()
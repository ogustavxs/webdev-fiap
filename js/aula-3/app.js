function exibirNome(nomeUsuario) {
    return nomeUsuario
}

function somaDoisNumeros(numero1, numero2=0) {
    return numero1 + numero2
}

console.log(exibirNome("Lucas") + " tem " + somaDoisNumeros(10, 20) + " anos")

const somaNumeros = (numero1, numero2) => numero1 + numero2
console.log(somaNumeros(10, 20))

//

let nome = "carla         ".toUpperCase()
console.log(nome.length)

if (nome.length < 3) {
    console.log("isso não é um nome")
}

console.log(nome.includes("CAR"))
console.log(nome.trim())

let numero = 5.98765434567
console.log(numero.toFixed(2))
console.log(isNaN(numero))
console.log(isNaN("carla"))

console.log((Math.floor(Math.random()*11)))
console.log((Math.ceil(Math.random()*10)))
console.log((Math.round(Math.random()*11)))

const dataAtual = new Date()
console.log(dataAtual.getHours())
// Exercicio 1
login = prompt("Digite seu login: ");
senha = prompt("Digite sua senha: ");

if (login == "1234" && senha == "1234") {
    alert("Login efetuado com sucesso!");
}
else {
    alert("login ou senha incorretos!");
}

// Exercicio 2
login = prompt("Digite seu login: ");
senha = prompt("Digite sua senha: ");

if ((login == "1234" && senha == "1234") || (login == "admin" && senha == "admin") || (login == "caba" && senha == "caba")) {
    alert("Login efetuado com sucesso!");
}
else {
    alert("login ou senha incorretos!");
}


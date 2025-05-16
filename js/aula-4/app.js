const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("form")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const assunto = document.getElementById("assunto")
const mensagem = document.getElementById("mensagem")
const cadastro = document.getElementById("cadastroUsuarios")

btnEnviar.addEventListener("click", () => {
    event.preventDefault()
    let nomeContent = nome.value
    let emailContent = email.value
    let assuntoContent = assunto.value === "option1" ? "Reclamação" : assunto.value === "option2" ? "Sugestão" : "Critica"
    let mensagemContent = mensagem.value

    if (nomeContent === "" || emailContent === "" || mensagemContent === "") {
        alert("Preencha os campos vazios")
        return
    }

    alert(`Bem vindo ${nomeContent}, só pra confirmar, seu email é ${emailContent} correto? Vimos aqui que fez uma ${assuntoContent} com sua mensagem: ${mensagemContent}`)

    const cardUsuario = document.createElement('div')
    cardUsuario.innerHTML = `
    <p>Nome: ${nomeContent}</p>
    <p>E-mail: ${emailContent}</p>
    `
    cardUsuario.style.cssText = "border: 1px solid black"
    cadastro.append(cardUsuario)

    form.reset()
})
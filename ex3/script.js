let nome = window.prompt("Qual o seu primeiro nome?")
document.getElementById("label_nome").innerHTML += nome


function enviar_form() {
    let nome = document.getElementById("input_nome").value
    let email = document.getElementById("input_email").value
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked')
    let estadoSelecionado = document.querySelector('input[name="estado_civil"]:checked')

    if (nome === "") {
        alert("Por favor, preencha o campo Nome completo.")
        document.getElementById("input_nome")
        return false
    }

    if (email === "") {
        alert("Por favor, preencha o campo E-mail.")
        document.getElementById("input_email")
        return false
    }

    if (!sexoSelecionado) {
        alert("Por favor, selecione o sexo.")
        return false
    }

    if (!estadoSelecionado) {
        alert("Por favor, selecione o estado civil.")
        return false
    }

    alert("Formulário enviado com sucesso!")
    return true
}
let nome = window.prompt("Qual o seu primeiro nome?")
document.getElementById("p_nome").innerHTML = `Olá, ${nome}!`


function enviar_form() {
    let nome = document.getElementById("input_nome").value
    let email = document.getElementById("input_email").value
    let sexo = document.getElementById("select_sexo").value
    let estadoCivil = document.getElementById("select_estado_civil").value

    if (nome === "") {
        alert("Por favor, preencha o campo Nome completo.")
        return false
    }

    if (email === "") {
        alert("Por favor, preencha o campo E-mail.")
        return false
    }

    if (sexo === "") {
        alert("Por favor, preencha o campo Sexo")
        return false
    }
    if (estadoCivil === "") {
        alert("Por favor, preencha o campo Estado Civil.")
        return false
    }

    alert("Formulário enviado com sucesso!")
    return true
}
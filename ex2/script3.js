function calcular_media() {
    let nome = "sem nome"
    nome = document.getElementById("input_nome_aluno").value

    let notas = Array.from(document.getElementsByName("input_nota")).map(nota => parseInt(nota.value))

    let soma = 0

    notas.forEach(nota => {
        soma += nota
    })

    divResultado = document.getElementById("divResultado")

    media = soma / notas.length

    txtMedia = document.createElement("p")
    txtMedia.innerHTML = `O aluno ${nome} obteve uma média de ${media}, portanto ele obteve o resultado: \n`

    txtMedia.innerHTML = (media >= 70) ? "✅ APROVADO" : ((media >= 50) ? "⚠️ RECUPERAÇÃO" : "❌ REPROVADO")
    divResultado.appendChild(txtMedia)
    
}
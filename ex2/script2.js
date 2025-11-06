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

    let status = 0

    if (media >= 70){
        status = 1
        
    } else if (media >= 50){
        status = 2
        
    } else {
        status = 3
        
    }
    
    switch (status){
        case 1:
            txtMedia.innerHTML += "✅ APROVADO"
            break
        case 2:
            txtMedia.innerHTML += "⚠️ RECUPERAÇÃO"
            break
        case 3:
            txtMedia.innerHTML += "❌ REPROVADO"
            break       
    }
        
    divResultado.appendChild(txtMedia)
    
}
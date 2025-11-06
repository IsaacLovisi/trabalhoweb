function calcular_media() {
    let nome = "sem nome" //inicializa a variável
    nome = document.getElementById("input_nome_aluno").value

    let notas = Array.from(document.getElementsByName("input_nota")).map(nota => parseInt(nota.value)) //pega um array com as notas já em tipo number 

    let soma = 0

    notas.forEach(nota => {
        soma += nota
    }) //soma as notas

    divResultado = document.getElementById("resultado-final")

    
    media = soma / notas.length //calcula media

    txtMedia = document.createElement("p")
    txtMedia.innerHTML = `O aluno ${nome} obteve uma média de ${media}, portanto ele obteve o resultado: \n`
    if (media >= 70){
        txtMedia.innerHTML += "✅ APROVADO"
    } else if (media >= 50){
        txtMedia.innerHTML += "⚠️ RECUPERAÇÃO"
    } else {
        txtMedia.innerHTML += "❌ REPROVADO"
    } //estrutura de if/else aninhados
        
    divResultado.appendChild(txtMedia)
    divResultado.style.display = "flex"
    divResultado.style.flexDirection = "column"
    
}
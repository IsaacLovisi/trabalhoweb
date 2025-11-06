function calcular() {
    let horasTrabalhadas = Number(document.getElementById("input_horas_trabalhadas").value);
    let valorHora = Number(document.getElementById("input_valor_hora").value);
    let descontoInss = Number(document.getElementById("input_desconto_inss").value);

    if (horasTrabalhadas > 180 || // verifica se os valores estão fora da faixa permitida
        horasTrabalhadas < 135 ||
        valorHora < 25 ||
        valorHora > 50 ||
        descontoInss > 15 ||
        descontoInss < 5 ||
        typeof horasTrabalhadas == "NaN" || // verifica se o usuário colocou valores não numéricos na caixa de texto
        typeof valorHora == "NaN" ||
        typeof descontoInss == "NaN"){

        window.alert("INSIRA UM VALOR VÁLIDO!!!!")
    } else {

        salarioBruto = valorHora * horasTrabalhadas
        console.log(salarioBruto)

        totalDesconto = (salarioBruto * descontoInss) / 100
        console.log("Desconto: ", descontoInss)

        salarioLiquido = salarioBruto - totalDesconto
        console.log("Salário líquido: ", salarioLiquido)
    

    
        textoSalarioBruto = document.createElement("p")
        textoSalarioBruto.innerHTML = `<b> Salário BRUTO </b> = ${salarioBruto}`
        
        textoDesconto = document.createElement("p")
        textoDesconto.innerHTML = `Total de Desconto INSS = ${totalDesconto}`    

        textoSalarioLiquido = document.createElement("p")
        textoSalarioLiquido.innerHTML = `<b> Salario Líquido </b>= ${salarioLiquido}`
        
        document.body.appendChild(textoSalarioBruto)
        document.body.appendChild(textoDesconto)
        document.body.appendChild(textoSalarioLiquido)
    }


}

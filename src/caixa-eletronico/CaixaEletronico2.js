const saqueCaixa = (valor) => {

    const notas = [100, 50, 20, 10]
    let restante = valor
    const resultado = []

    while (restante > 0){
        for (const nota of notas){
            if(restante >= nota){
                resultado.push(nota)
                restante -= nota
                break
            }
        }
    }
    
    return resultado
}

export {saqueCaixa}
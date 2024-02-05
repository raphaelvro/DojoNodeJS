import { saqueCaixa } from './CaixaEletronico.js'

test('sacar 80 reais', () => {
    const resultado = saqueCaixa(80)  
    expect(resultado.notas2).toEqual([50, 20, 10])
})

test('sacar 30 reais', () => {
    const resultado = saqueCaixa(30)  
    expect(resultado.notas3).toEqual([20, 10])
})

/*
test('sacar 20 reais', () => {
    expect(saqueCaixa(20)).toEqual([20])
})
*/
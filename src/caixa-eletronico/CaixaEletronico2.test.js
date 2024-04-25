import {saqueCaixa} from './CaixaEletronico2.js'

test('sacar 80 reais', () => {
    const resultado = saqueCaixa(80)  
    expect(resultado).toEqual([50, 20, 10])
})

test('sacar 30 reais', () => {
    const resultado = saqueCaixa(30)  
    expect(resultado).toEqual([20, 10])
})

test('sacar 20 reais', () => {
    const resultado = saqueCaixa(20)  
    expect(resultado).toEqual([20])
})

test('sacar 300 reais', () => {
    const resultado = saqueCaixa(300)  
    expect(resultado).toEqual([100, 100, 100])
})

import { soma, subtracao, multiplicacao, divisao, } from './OperacoesBasicas.js'

//somar
test('adds 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3);
})

test('adds 6 + 2 text to equal 8', () => {
    expect(soma('6', '2')).toBe(8);
})

//subtrair
test('subtract 3 - 1 to equal 2', () => {
    expect(subtracao(3, 1)).toBe(2);
})

test('subtract 10 - 5 text to equal 5', () => {
    expect(subtracao('10', '3')).toBe(7);
})

//multiplicar
test('multiply 2 * 2 to equal 4', () => {
    expect(multiplicacao(2, 2)).toBe(4);
})

test('multiply 3 * 2 text to equal 6', () => {
    expect(multiplicacao('3', '2')).toBe(6);
})

//dividir
test('divide 6 / 2 to equal 3', () => {
    expect(divisao(6, 2)).toBe(3);
})

test('divide 8 / 2 text to equal 4', () => {
    expect(divisao('8', '2')).toBe(4);
})
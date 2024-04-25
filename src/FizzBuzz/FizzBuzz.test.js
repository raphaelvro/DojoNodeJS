import {verificarNumero} from './FizzBuzz'

test('teste divisão', () => {
    expect(verificarNumero(1)).toBe('1');
    expect(verificarNumero(2)).toBe('2');
    expect(verificarNumero(3)).toBe('Fizz');
    expect(verificarNumero(4)).toBe('4');
    expect(verificarNumero(5)).toBe('Buzz');
    expect(verificarNumero(6)).toBe('Fizz');
    expect(verificarNumero(7)).toBe('7');
    expect(verificarNumero(8)).toBe('8');
    expect(verificarNumero(9)).toBe('Fizz');
    expect(verificarNumero(10)).toBe('Buzz');
    expect(verificarNumero(11)).toBe('11');
    expect(verificarNumero(12)).toBe('Fizz');
    expect(verificarNumero(13)).toBe('13');
    expect(verificarNumero(14)).toBe('14');
    expect(verificarNumero(15)).toBe('FizzBuzz');
    expect(verificarNumero(16)).toBe('16');
    expect(verificarNumero(17)).toBe('17');
    expect(verificarNumero(18)).toBe('Fizz');
    expect(verificarNumero(19)).toBe('19');
    expect(verificarNumero(20)).toBe('Buzz');
})
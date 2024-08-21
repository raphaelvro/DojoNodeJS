import { verificarAno2 } from './ano.js' 

test('testa ano comum', () => {
    expect(verificarAno2(1742)).toBe(false);
    expect(verificarAno2(1889)).toBe(false);
    expect(verificarAno2(1951)).toBe(false);
    expect(verificarAno2(2011)).toBe(false);
});

test('testa ano bissexto', () => {
    expect(verificarAno2(1600)).toBe(true);
    expect(verificarAno2(1732)).toBe(true);
    expect(verificarAno2(1888)).toBe(true);
    expect(verificarAno2(1944)).toBe(true);
    expect(verificarAno2(2008)).toBe(true);
});
import { verificarAno, verificarAno2 } from './ano.js' 

test('testa ano comum', () => {
    expect(verificarAno(1742)).toBe(false);
    expect(verificarAno(1889)).toBe(false);
    expect(verificarAno(1951)).toBe(false);
    expect(verificarAno(2011)).toBe(false);
});

test('testa ano bissexto', () => {
    expect(verificarAno(1600)).toBe(true);
    expect(verificarAno(1732)).toBe(true);
    expect(verificarAno(1888)).toBe(true);
    expect(verificarAno(1944)).toBe(true);
    expect(verificarAno(2008)).toBe(true);
});
import { jogar } from './jokenpo.js'

test('Empate', () => {
    expect(jogar('pedra', 'pedra')).toBe('Empate!')
    expect(jogar('papel', 'papel')).toBe('Empate!')
    expect(jogar('tesoura', 'tesoura')).toBe('Empate!')
})

test('Jogador1 ganha', () => {
    expect(jogar('pedra', 'tesoura')).toBe('Jogador1 ganha')
    expect(jogar('tesoura', 'papel')).toBe('Jogador1 ganha')
    expect(jogar('papel', 'pedra')).toBe('Jogador1 ganha')
})

test('Jogador2 ganha', () => {
    expect(jogar('tesoura', 'pedra')).toBe('Jogador2 ganha')
    expect(jogar('papel', 'tesoura')).toBe('Jogador2 ganha')
    expect(jogar('pedra', 'papel')).toBe('Jogador2 ganha')
})
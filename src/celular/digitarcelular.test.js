import {  numeroCel } from './digitarcelular.js'

test('menssagem A', () => {
    expect(numeroCel('2')).toBe('A')
})

test('menssagem B', () => {
    expect(numeroCel('22')).toBe('B')
})

test('menssagem C', () => {
    expect(numeroCel('222')).toBe('C')
})

test('menssagem D', () => {
    expect(numeroCel('3')).toBe('D')
})

test('menssagem E', () => {
    expect(numeroCel('33')).toBe('E')
})

test('menssagem F', () => {
    expect(numeroCel('333')).toBe('F')
})

test('menssagem BA', () => {
    expect(numeroCel('22_2')).toBe('BA')
})

test('menssagem AD', () => {
    expect(numeroCel('23')).toBe('AD')
})
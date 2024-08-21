import { convert } from './conversor2.js'

test('convert null', () => {
    expect(convert(0)).toBe('')
})

test('convert one', () => {
    expect(convert(1)).toBe('I')
})

test('convert two', () => {
    expect(convert(2)).toBe('II')
})


test('convert three', () => {
    expect(convert(3)).toBe('III')
})

test('convert four', () => {
    expect(convert(4)).toBe('IV')
})

test('convert six', () => {
    expect(convert(6)).toBe('VI')
})

test('convert ten', () => {
    expect(convert(10)).toBe('X')
})

test('convert eleven', () => {
    expect(convert(11)).toBe('XI')
})

test('convert twelve', () => {
    expect(convert(12)).toBe('XII')
})

test('convert twelve', () => {
    expect(convert(20)).toBe('XX')
})
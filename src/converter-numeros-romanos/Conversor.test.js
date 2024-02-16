import {romano} from './Conversor.js'

test('Conversão de indo-arábico para romano', () => {
    expect(romano(1)).toBe('I');
  });

  test('Conversão de indo-arábico para romano', () => {
    expect(romano(2)).toBe('II');
  });

  test('Conversão de indo-arábico para romano', () => {
    expect(romano(3)).toBe('III');
  });

  test('Conversão de indo-arábico para romano', () => {
    expect(romano(4)).toBe('IV');
  });
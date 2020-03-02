/* eslint-env jest */
const print = require('./led-print')

describe('led-print', () => {
  it('prints the correct text for a given second', () => {
    const text = 'a bc'
    const n = 3

    expect(print(n, text, 0)).toBe('___')
    expect(print(n, text, 1)).toBe('__a')
    expect(print(n, text, 2)).toBe('_a_')
    expect(print(n, text, 3)).toBe('a_b')
    expect(print(n, text, 4)).toBe('_bc')
    expect(print(n, text, 5)).toBe('bc_')
    expect(print(n, text, 6)).toBe('c__')
    expect(print(n, text, 7)).toBe('___')
    expect(print(n, text, 8)).toBe('__a')
    expect(print(n, text, 12)).toBe('bc_')
    expect(print(n, text, 20)).toBe('c__')
    expect(print(n, text, 45)).toBe('a_b')
  })
})

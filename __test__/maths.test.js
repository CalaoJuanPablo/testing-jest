import { sumar, restar, multiplicar, dividir } from '../maths'

describe('Cálculos matemáticos', function() {
    test('Prueba de sumas', function() {
        expect(sumar(1,1)).toBe(2)
    })

    test('Prueba restar', function() {
        expect(restar(1,1)).toBe(0)
    })

    test('Prueba multiplicar', function() {
        expect(multiplicar(1,1)).toBe(1)
    })

    test('Prueba dividir', function() {
        expect(dividir(1,1)).toBe(1)
    })
})
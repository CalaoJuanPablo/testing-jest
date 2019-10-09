import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobar que existe o no un elemento', () => {
    test('Contiene una banana', () => {
        expect(arrayFruits()).toContain('banana')
    })

    test('No continene un platano', () => {
        expect(arrayFruits()).not.toContain('platano')
    })

    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6)
    })

    test('Comprobar que existe un color', () => {
        expect(arrayColors()).toContain('rojo')
    })
})
import { numbers } from '../numbers'

describe('Comparacion de numeros', function(){
    test('Mayor que', function(){
        expect(numbers(2,2)).toBeGreaterThan(3)
    })

    test('Mayor igual que', function(){
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4)
    })

    test('Menor que', function(){
        expect(numbers(2,2)).toBeLessThan(5)
    })

    test('Mayor igual que', function(){
        expect(numbers(2,2)).toBeLessThanOrEqual(4)
    })
})
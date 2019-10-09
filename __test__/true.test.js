import {
    isNull,
    isTrue,
    isFalse,
    isUndefined
} from '../true'

describe('Probar resultados nulos', function(){
    test('isNull', function(){
        expect(isNull()).toBeNull()
    })
})

describe('Probar resultados verdaderos', function(){
    test('isTrue', function(){
        expect(isTrue()).toBeTruthy()
    })
})

describe('Probar resultados falsos', function(){
    test('isFalse', function(){
        expect(isFalse()).toBeFalsy()
    })
})

describe('Probar resultados indefinidos', function(){
    test('isUndefined', function(){
        expect(isUndefined()).toBeUndefined()
    })
})
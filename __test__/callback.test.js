import { callbackHell } from '../callback'

describe('Probando un callback', () => {
    test('callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola javascripters')
            done()
        }
        callbackHell(otherCallback)
    })
})
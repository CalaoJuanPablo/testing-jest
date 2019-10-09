describe('Comprobar cadenas de texto', () => {
    const text = 'Un texto random'
    test('debe contener el siguiente texto', () => {
        expect(text).toMatch(/random/)
    })

    test('no contine el siguiente texto', () => {
        expect(text).not.toMatch(/bonito/)
    })

    test('comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(15)
    })
})
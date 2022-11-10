const {
    deepEqual,
    ok
} = require('assert')

const DEFAULT_ITEM_CADASTRAR = { 
    nome: 'Flash',
    poder:'Speed',
    id: 1
}

describe('Suite de manipulacao de Herois', ()=>{
    it('Deve pesquisar um heroi, usando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRAR
        ok(null, expected)
    })
    // it('deve cadastrar um heroi, usando arquivos', async ()=>{
    //     const expected = DEFAULT_ITEM_CADASTRAR

    //     ok(null, expected)
    // })
})
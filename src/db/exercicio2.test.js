import { start } from './exercicio2.js'

import {openConnection, closeConnection, executeQuery} from './postgres.js'
jest.mock('./postgres.js')

beforeEach(() => {
    jest.clearAllMocks()
  })

test('Testa retorno conexão', async () => {
    executeQuery.mockReturnValue([{nome: 'salada', saldo: 10}])
    const resultado = await start()
    expect(resultado).toEqual([{nome:'salada', saldo: 10}])
    expect(executeQuery).toHaveBeenCalledWith('SELECT * FROM exercicio_node')
    expect(openConnection).toHaveBeenCalledWith()
    expect(closeConnection).toHaveBeenCalledWith()
})

test('Testa retorno conexão com lista vazia', async () => {
    executeQuery.mockReturnValue([]) // Mock retorna uma lista vazia
    const resultado = await start()
    expect(resultado).toEqual([]) // Verifica se o resultado é uma lista vazia
    expect(executeQuery).toHaveBeenCalledWith('SELECT * FROM exercicio_node')
    expect(openConnection).toHaveBeenCalledWith()
    expect(closeConnection).toHaveBeenCalledWith()
})
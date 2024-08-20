import { start } from './primeiro.js'

import { level3 } from './terceiro.js'
jest.mock('./terceiro.js')
    

test('teste sucesso', async () => {
    level3.mockImplementation(() => 'ABBB444')
    const resultado1 = start()

    expect(resultado1).toBe('ABBB444')

    expect(level3).toHaveBeenCalledTimes(1)

})
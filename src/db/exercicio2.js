import {openConnection, closeConnection, executeQuery} from './postgres.js'

//const convertePessoa  = (nome, saldo)  => {nome, saldo}


const start = async () =>{
  
    await openConnection()
    //const x  = convertePessoa('rapha',  15)
    // x.nome

    //buscar os regsitro no banco da tabela exercicio node e guardar em uma variavel
    
    const resultado = await executeQuery('SELECT * FROM exercicio_node');
    for (const linha of resultado) {
      console.log(linha);
    }
    //interar na lista de retorno e converter para uma lista de objetos
    
    await closeConnection()
    return resultado

}

export{start}
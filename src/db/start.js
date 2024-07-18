import {openConnection, closeConnection, executeQuery, executeCountRows} from './postgres.js'

const faker = require('faker');

const start = async () =>{
  
    await openConnection()

    totalVoltas = 10

    for(let voltas = 0; voltas < totalVoltas; voltas++){
        await executeQuery(adicionaUsuario('fausto' + voltas)) 
    }

    await closeConnection()

}

const adicionaUsuario = (nomeUsuario) => 
    `INSERT INTO public.exercicio_node (nome, saldo)VALUES (\'${nomeUsuario}'\', 10000)`

start()
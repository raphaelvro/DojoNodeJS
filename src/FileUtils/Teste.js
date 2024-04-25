import { readFile, saveFile, saveFileText, saveJSONFile } from './FileUtils.js'

const iterarLista = () => {
    const result = readFile('D:\\Repositórios\\DojoNodeJS\\src\\Output\\qualquer.txt')
    const lista = result.split('\r\n')
    for (const i of lista){
        console.log(i)
    }
    console.log('batata')
}

const randonList = () => {
    const result = readFile ('D:\\Repositórios\\DojoNodeJS\\src\\Output\\Faustao.txt')
    const lista = result.split('\r\n')
    const i = lista[Math.floor(Math.random() * lista.length)]
    console.log(i)
}

const salvarArquivo = () => {
    saveFileText('caneta', '1', 'batata\n oi')
    console.log('')
}

const objetoPessoa = () =>{
    const result = readFile('D:\\Repositórios\\DojoNodeJS\\src\\Output\\qualquer.txt')
    const lista = result.split('\r\n')
    const resultado = []
    for (const i of lista){
        const pessoa = i.split(';')
        resultado.push({'nome': pessoa[0], 'idade': pessoa[1], 'sexo': pessoa[2]})
        
    }
    console.log(resultado)

}

const concatenador = (palavra1, palavra2) => {
    return `${String(palavra1).replaceAll('a', 'x').replaceAll('x', 'a')} ${palavra2}`
}

const salvarJson = async () =>{
   const pessoa = {'nome': 'Raphael', 'idade': '30', 'sexo': 'M'}
   await saveJSONFile(pessoa, 'D:\\Repositórios\\DojoNodeJS\\src\\Output\\cadastro.json')

   console.log(concatenador('batata', 'doce'))

}

const start = async () =>{
    const arquivobruto = readFile('D:\Repositórios\DojoNodeJS\src\Output\cadastro.json')
    const pessoa = JSON.parse(arquivobruto)

    for(const key of Object.keys(pessoa)){
        console.log(pessoa[key])
    }

    console.log('')
 
 }

start()
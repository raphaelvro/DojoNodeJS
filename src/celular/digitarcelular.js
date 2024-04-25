/*
Um dos serviços mais utilizados pelos usuários de aparelhos celulares são os SMS (Short Message Service), 
que permite o envio de mensagens curtas (até 255 caracteres em redes GSM e 160 caracteres em redes CDMA).

Para digitar uma mensagem em um aparelho que não possui um teclado QWERTY embutido é necessário fazer 
algumas combinações das 10 teclas numéricas do aparelho para conseguir digitar. Cada número é associado a um conjunto de letras como a seguir:

Letras  ->  Número 
ABC    ->  2 
DEF    ->  3 
GHI    ->  4 
JKL    ->  5 
MNO    ->  6 
PQRS    ->  7 
TUV    ->  8 
WXYZ   ->  9 
Espaço -> 0 
Desenvolva um programa que, dada uma mensagem de texto limitada a 255 caracteres, retorne a seqüência de números que precisa ser digitada. 
Uma pausa, para ser possível obter duas letras referenciadas pelo mesmo número, deve ser indicada como _.

Por exemplo, para digitar "SEMPRE ACESSO O DOJOPUZZLES", você precisa digitar:

77773367_7773302_222337777_777766606660366656667889999_9999555337777
 */
const tecladoCel = {
    '0' : ' ',
    '2': 'A',
    '22' : 'B',
    '222' : 'C',
    '3' : 'D',
    '33' : 'E',
    '333' : 'F',
    '4' : 'G',
    '44' : 'H',
    '444' : 'I',
    '5' : 'J',
    '55' : 'K',
    '555' : 'L',
    '6' : 'M',
    '66' : 'N',
    '666' : 'O',
    '7' : 'P',
    '77' : 'Q',
    '777' : 'R',
    '7777' : 'S',
    '8' : 'T',
    '88' : 'U',
    '888' : 'V',
    '9' : 'W',
    '99' : 'X',
    '999' : 'Y',
    '9999' : 'Z',
    '_' : ''

}

const numeroCel = (input) => {
   
    let resultado = ''   
    let tempLetter
    for(const elemento of input){
        if (tempLetter == null) {
            tempLetter = elemento
            continue
        }

        if(tempLetter[0] == elemento) {
            tempLetter += elemento
            continue
        }
        
        resultado += tecladoCel[tempLetter]
        tempLetter = elemento
         
    }
 
    resultado += tecladoCel[tempLetter]

    return resultado
}
export { numeroCel }




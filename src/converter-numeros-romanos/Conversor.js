/*
O sistema de numeração romana (ou números romanos) desenvolveu-se na Roma Antiga e utilizou-se em todo o seu Império. Neste sistema as cifras escrevem-se com determinadas letras, que representam os números. As letras são sempre maiúsculas, já que no alfabeto romano não existem as minúsculas, as letras são I, V, X, L, C, D e M.

Sua tarefa é desenvolver um programa que converta números indo-arábicos para o formato romano e vice-versa. As regras para a formação dos números romanos são apresentadas a seguir.

Cada letra corresponde a um determinado valor:

I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

*/
const romanNumerals = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10,'IX': 9, 'V': 5,'IV': 4, 'I': 1 }

const romano = (arabico) => {
  
    let resultado = ''
  
    for (const numeral in romanNumerals) {
      while (arabico >= romanNumerals[numeral]) {
        resultado += numeral;
        arabico -= romanNumerals[numeral]
  
      }
    }
  
    return resultado
}

export {romano}
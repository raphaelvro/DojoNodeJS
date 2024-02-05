/*
Neste problema, você deverá testar numeros de 1 a 20, um em cada linha, com as seguintes exceções:

Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.
 */

const verificarNumero = (numero) => {
    const isFizz = numero % 3 == 0
    const isBuzz = numero % 5 == 0
    const isFizzBuzz = isFizz && isBuzz

        if (isFizzBuzz) {

            return 'FizzBuzz'
        }
        else if (isFizz){

            return 'Fizz'
        }
        else if (isBuzz){

            return 'Buzz'
        }
        else {

            return String(numero)
        }
}

export {verificarNumero}
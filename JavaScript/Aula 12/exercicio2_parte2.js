/* VALIDAÇÃO DE CARTÃO DE CRÉDITO (ALGORITMO DE LUHN)
Nesse exercício, você fará a validação de números de cartão de crédito utilizando o algoritmo de Luhn:
1) Retire o último dígito do número. Ele é o verificador;
2) Escreva os números na ordem inversa;
3) Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
4) Some todos os números;
5) O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados pra obter um módulo 10.
6) O cartão será válido se os números somados % 10 === 0.
*/

const cartao = "4024007147415714"

const cartaoConvertido = cartao.split("");
const cartaoParseado = cartaoConvertido.map(function(i) //Cria um novo array
{
    return parseInt(i) //Transformar a string para número, porque se o JavaScript encontrar um número, 
    //vai realizar a string também como número, o que pode ocasionar erros 
})

const digitoVerificador = cartaoParseado.pop()

const cartaoParse = cartaoParseado.reverse()

const digitosMultiplicados = cartaoParse.map(function(i, indice){
    if (indice % 2 === 0){ //Sempre bom usar o <===> para garantir o mesmo valor e tipo
        i *= 2
    }
    return i
})

const subraiaNove = digitosMultiplicados.map(function(i){
    if (i>9){
        return  i -= 9;
      } else{
            return i;
        }
}, 0)

const somaTotal = digitosMultiplicados.reduce(function(acumulado, atual){
    return acumulado + atual
})

console.log(digitoVerificador + somaTotal);

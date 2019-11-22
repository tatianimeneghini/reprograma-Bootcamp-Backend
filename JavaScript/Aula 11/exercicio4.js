// Escreva uma função chamada pegaElemento.
// Dado um array e um inteiro, pegaElemento devolve o valor de acordo com o inteiro dado, dentro do array fornecido.
// Se o array tiver um comprimento de 0, ele deve retornar undefined.
// Exemplo de entrada:
// console.log(pegaElemento([1, 3, 5], 1);

let array = [1, 3, 5, 7, 9, 11];

function pegaElemento(array, indice){
    if(array.length < 1){
        return undefined
    } else{
        return array[indice];
    }
}

console.log(pegaElemento([1, 3, 5, 7, 9, 11], 1));
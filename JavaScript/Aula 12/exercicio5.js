/*Array para Object
Escreva uma função que receba um array 2d e retorne um objeto com cada par de elementos do array
como um par chave-valor. 
Por exemplo:    const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]
                const obj = {
                fabricante : 'Ford',
                modelo : 'Mustang',
                ano : 1964
                }
Escreva também uma função que faça o contrário. Transforme os pares de key-value de um object em um array 2d.
*/
const array = [[0, 1], [2, 3], [4, 5]] //chave, valor

function retornarObjeto(arrayCarro){ //Para entrar no array que possui a chave e o valor que precisamos para o objeto
    let objeto = {} //o objeto está vazio para receber o que receber na array
    for (let index of arrayCarro) { //para percorrer uma array, é necessário utilizar o for
        objeto[indice[0]] = index[1] //define a propriedade/chave e o valor, através dos índices que possuem chave+valor
    }
    return objeto
}

console.log(retornarObjeto());
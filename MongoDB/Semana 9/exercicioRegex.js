//Regex ou expressão regular são padrões utilizados para selecionar combinações de caracteres em uma string.

//1: Faça uma função que retorne se uma data string contém a letra h nela.
function retornarString (palavra){
    const regex = /h/
    return regex.test(palavra)
}

const resultado = retornarString("baby shark")
console.log(resultado)

//2: Altere sua função para que ela aceite maiúscula e minúscula (case insensítivel).
function retornarString2 (palavra){
    const regex = /h/i
    return regex.test(palavra)
}

const resultado2 = retornarString2("Hollywood")
console.log(resultado2)

//3: Altere sua função para que ela retorne se a string
//termina com "a" ou comece com "b"
//aceitando maiúscula e minúscula também.
function retornarString3(palavra){
    const regex = /a$|^b/
    return regex.test(palavra)
}

const resultado3 = retornarString3("baby sHaRk")
console.log(resultado3)

//DESAFIO: altere sua função para verificar se a string contém números.
function retornarString4(palavra){
    const regex = /[0-9]+/
    return regex.test(palavra)
}

const resultado4 = retornarString4("b4b1 5h4rk")
console.log(resultado4)